import Post from "../models/Post";
import PostInList from "./PostInList";
import PostForm from "./PostForm";
import { useState } from "react";

const SocialPost = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [IsFormVisible, setIsFormVisible] = useState(false);

  const handleSubmit = (newPost: Post) => {
    setPosts([...posts, newPost]);
    setIsFormVisible(false);
  };

  const handleDelete = (index: number) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>My Thoughts</h1>
      <button className="newthought" onClick={() => setIsFormVisible(true)}>
        New Thought
      </button>
      <div>
        {IsFormVisible && (
          <PostForm
            onSubmit={handleSubmit}
            onClose={() => setIsFormVisible(false)}
          />
        )}
      </div>

      {posts.map((post, index) => (
        <PostInList
          key={index}
          post={post}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
};
export default SocialPost;
