import React from "react";
import "./lane.css";
import { getStatusColor } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { updateTodoStatus } from "../../features/todoSlice";

export default function Lane({ status, todos }) {
  const dispatch = useDispatch();

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
            draggable={true}
            onDragStart={(event) => onDragStart(event, item.id)}
          >
            <p className="todo-text">{item.todo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
