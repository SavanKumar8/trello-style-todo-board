import React, { useEffect } from "react";
import { fetchToDos } from "../../features/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import Lane from "../lane/lane";
import Loader from "../common/loader";
import "./todoBoard.css";
import { API_STATES, CARD_STATUS } from "../../constant/constant";

export default function TodoBoard() {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToDos());
  }, [dispatch]);

  if (loading !== API_STATES.SUCCESS) {
    return <Loader />;
  }

  return (
    <div className="board">
      {CARD_STATUS.map((status) => (
        <Lane
          key={status}
          status={status}
          todos={todos.filter((todo) => todo.status === status)}
        />
      ))}
    </div>
  );
}
