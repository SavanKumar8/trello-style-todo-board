import React, { useState, useEffect } from "react";
import "./createTodoModal.css";

export default function CreateTodoModal({
  onClose,
  onCreate,
  isEdit = false,
  isDelete = false,
  initialData = {},
  modalHeading,
  buttonLabel,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (isEdit && initialData) {
      setTitle(initialData.todo || "");
      setDescription(initialData.description || "");
    }
  }, [isEdit, initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDelete) {
      onCreate(initialData?.id);
    } else {
      if (!title.trim()) return;
      onCreate(title, description, initialData?.id);
    }
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-heading">{modalHeading}</h2>

        <form onSubmit={handleSubmit}>
          <div className="modal-form">
            {!isDelete && (
              <>
                <label className="form-label">Title</label>
                <input
                  type="text"
                  placeholder="What's on your mind?"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </>
            )}

            {!isEdit && !isDelete && (
              <>
                <label className="form-label">Description</label>
                <input
                  type="text"
                  placeholder="Add more details here..."
                  value={description}
                  className="description-input"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </>
            )}

            <div className="modal-buttons">
              <button type="submit">{buttonLabel}</button>
              <button type="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
