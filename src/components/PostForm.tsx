import { useState } from "react";
import Post from "../models/Post";
import React from "react";
function PostForm({
  onSubmit,
  onClose,
}: {
  onSubmit: (post: Post) => void;
  onClose: () => void;
}) {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");
  function handleSubmit(e: React.FormEvent) {
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
}

export default PostForm;
