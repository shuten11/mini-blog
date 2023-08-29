import { useNavigate , useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./PostDetails.css"
const PostDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/posts/' + id);
  const navigate = useNavigate ();

  const handleClick = () => {
    fetch('http://localhost:8000/posts/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
        navigate('/');
    }) 
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default PostDetails;