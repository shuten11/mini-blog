import { Link } from "react-router-dom";
import "./PostList.css"
const PostList = ({ posts }) => {
  return (
    <div className="post-list">
        <h2>Posts</h2>
      {posts.map((post) => (
        <div className="post-preview" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>Written by {post.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
