import { useState } from "react";
import React from "react";
const PostForm = ({ onSubmit, onClose }: any) => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");
  function handleSubmit(e: any) {
    e.preventDefault();
    onSubmit({ title, thought });
    setTitle("");
    setThought("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title-input">Title:</label>
        <input
          type="text"
          id="title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label htmlFor="thought-textarea">Thought:</label>
        <textarea
          type="text"
          id="thought-textarea"
          value={thought}
          onChange={(e) => setThought(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default PostForm;
