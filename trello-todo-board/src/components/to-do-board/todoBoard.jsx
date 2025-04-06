import React, { useEffect, useState } from "react";
import { addTodo, fetchToDos } from "../../features/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import Lane from "../lane/lane";
import Loader from "../common/loader/loader";
import "./todoBoard.css";
import {
  API_STATES,
  BUTTON_ACTION,
  CARD_STATUS,
  STATUS,
} from "../../constant/constant";
import Button from "../common/button/button";
import PlusIcon from "../../assets/plus_icon.svg";
import CreateTodoModal from "../to-do-do/todoModal";
export default function TodoBoard() {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    dispatch(fetchToDos());
  }, [dispatch]);

  if (loading !== API_STATES.SUCCESS) {
    return <Loader />;
  }
  ``;
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleCreateTodo = (title, description) => {
    const newTodo = {
      id: 1,
      todo: title,
      description,
      status: STATUS.PENDING,
    };

    dispatch(addTodo(newTodo));
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="custom-button">
        <Button
          label={BUTTON_ACTION.CREATE_TODO}
          icon={PlusIcon}
          onClick={openModal}
          className="create-button"
        />
      </div>
      <div className="board">
        {CARD_STATUS.map((status) => (
          <Lane
            key={status}
            status={status}
            todos={todos.filter((todo) => todo.status === status)}
          />
        ))}
      </div>
      {isModalOpen && (
        <CreateTodoModal
          onClose={closeModal}
          onCreate={handleCreateTodo}
          modalHeading={"Create New Todo"}
          buttonLabel={"Create"}
        />
      )}
    </>
  );
}
