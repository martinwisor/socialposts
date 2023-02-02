import React from "react";
import Post from "../models/Post";

const PostInList = ({
  post,
  onDelete,
}: {
  post: Post;
  onDelete: () => void;
}) => {
  return (
    <div className="textbox">
      <table>
        <th>
          <h2 className="title">{post.title}</h2>
          <tr>
            <td>
              <h2 className="thought">{post.thought}</h2>
            </td>
          </tr>
        </th>
        <th>
          <button onClick={onDelete}>Delete</button>
        </th>
      </table>
    </div>
  );
};

export default PostInList;
