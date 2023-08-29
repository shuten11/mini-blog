import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import "./Authors.css";
const Authors = ({ setUrl }) => {
  const {
    data: authors,
    error,
    isPending,
  } = useFetch("http://localhost:8000/authors/");

  const [selectedAuthors, setSelectedAuthors] = useState([]);

  useEffect(() => {
    if (selectedAuthors.length === 0) {
      setUrl("http://localhost:8000/posts/");
    } else {
      setUrl(
        "http://localhost:8000/posts?author=" +
          selectedAuthors.join("&author="),
      );
    }
  }, [selectedAuthors]);

  const handleCheckboxChange = (e) => {
    const selectedAuthor = e.target.value;
    if (e.target.checked) {
      setSelectedAuthors((prevSelected) => [...prevSelected, selectedAuthor]);
    } else {
      setSelectedAuthors((prevSelected) =>
        prevSelected.filter((author) => author !== selectedAuthor),
      );
    }
  };

  return (
    <div>
      <h2>Authors</h2>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <ul className="checkbox-list">
        {authors &&
          authors.map((author) => (
            <li key={author.id}>
              <input
                type="checkbox"
                value={author.name}
                onChange={(e) => handleCheckboxChange(e)}
              />
              <label>{author.name}</label>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Authors;
