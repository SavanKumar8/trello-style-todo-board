import React, { useState } from "react";
import "./lane.css";
import { getStatusColor } from "../../utils/utils";
import { useDispatch } from "react-redux";
import {
  updateTodoStatus,
  updateTodo,
  deleteTodo,
} from "../../features/todoSlice";
import editIcon from "../../assets/edit_icon.png";
import deleteIcon from "../../assets/delete_icon.png";
import TodoModal from "../to-do-do/todoModal";

export default function Lane({ status, todos }) {
  const dispatch = useDispatch();
  const [editClick, setEditClick] = useState(false);
  const [deleteClick, setDeleteClick] = useState(false);
  const closeModal = () => {
    setEditClick(false), setDeleteClick(false);
  };
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleEditSubmit = (title, description, id) => {
    dispatch(updateTodo({ id, title, description }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    setDeleteClick(false);
  };
  const editIconClick = (todo) => {
    setEditClick(true);
    // setDeleteClick(true);
    setSelectedTodo(todo);
  };

  const deleteIconClick = (todo) => {
    setSelectedTodo(todo);
    setDeleteClick(true);
  };
  const onDragStart = (event, id) => {
    event.dataTransfer.setData("todoId", id);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event) => {
    const todoId = parseInt(event.dataTransfer.getData("todoId"));
    dispatch(updateTodoStatus({ id: todoId, newStatus: status }));
  };

  return (
    <div className="lane" onDragOver={onDragOver} onDrop={onDrop}>
      <h2 style={{ color: getStatusColor(status) }}>{status.toUpperCase()}</h2>

      <div className="lane-cards">
        {todos.map((item) => (
          <div
            key={item.id}
            className="todo-card"
            style={{
              borderTop: `4px solid ${getStatusColor(item.status)}`,
            }}
            draggable={true}
            onDragStart={(event) => onDragStart(event, item.id)}
          >
            <div className="todo-elements">
              <div className="todo-text-wrapper">
                <p className="todo-text">{item.todo}</p>
              </div>
              <img
                src={editIcon}
                width={24}
                height={24}
                alt="Edit"
                onClick={() => editIconClick(item)}
              />
              <img
                src={deleteIcon}
                width={20}
                height={20}
                alt="Edit"
                onClick={() => deleteIconClick(item)}
              />
            </div>
          </div>
        ))}
        {editClick && (
          <TodoModal
            onClose={closeModal}
            modalHeading={"Update your Todo"}
            buttonLabel={"Update"}
            isEdit={true}
            initialData={selectedTodo}
            onCreate={handleEditSubmit}
          />
        )}
        {deleteClick && (
          <TodoModal
            onClose={closeModal}
            modalHeading={
              "Do you really want to delete this Todo? This action cannot be undone."
            }
            buttonLabel={"Delete"}
            isDelete={true}
            initialData={selectedTodo}
            onCreate={handleDelete}
          />
        )}
      </div>
    </div>
  );
}
