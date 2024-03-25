import React from "react";
import "./TodoItem.css";

export default function TodoItem({
  id,
  isDone,
  content,
  date,
  onUpdate,
  onDelete,
}) {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        checked={isDone}
        readOnly
        onChange={onChangeCheckbox}
      />
      <div className="content">{content}</div>
      <div className="date">{new Date().toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
}
