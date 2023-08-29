import PostList from "../../components/PostList/PostList";
import Authors from "../../components/Filters/Authors";
import useFetch from "../../hooks/useFetch";
import "./Home.css";
import { useState } from "react";

export const Home = () => {
  const [url, setUrl] = useState("http://localhost:8000/posts");
  const { error, isPending, data: posts } = useFetch(url);

  return (
    <div className="container">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <div className="item posts">{posts && <PostList posts={posts} />}</div>
      <div className="item authors">
        <Authors setUrl={setUrl} />
      </div>
    </div>
  );
};

export default Home;
