import React, { useState } from "react";

const TodoForm = ({
  initialTitle = "",
  initialDescription = "",
  onProcessTodo,
  buttonText,
  loading,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  return (
    <div>
      <input
        onChange={e => setTitle(e.currentTarget.value)}
        type="text"
        placeholder="title"
        value={title}
      />
      <input
        onChange={e => setDescription(e.currentTarget.value)}
        type="text"
        placeholder="description"
        value={description}
      />
      {loading ? (
        "...Loading"
      ) : (
        <button onClick={() => onProcessTodo({ title, description })}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default TodoForm;
