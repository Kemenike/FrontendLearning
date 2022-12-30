import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Posts = () => {

  // Allows navigation through pages without links. (Programmatically)
  let navigate = useNavigate();

  // Grabs the parameter that was used to load page.
  const { id } = useParams();
  // Acts like a data layer outside of function scope.
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchID, setSearchID] = useState(id);

  function onSearch () {
    setLoading(true);
    fetchPosts(searchID);
  }

  async function fetchPosts(userID) {
    const { data } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userID || id}`);
    setPosts(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="post__search">
        <button onClick={() => navigate('/')}>← Back</button>
        <div className="post__search--container">
          <label className="post__search--label">Search by Id</label>
          <input 
            type="number"
            value={searchID}
            onKeyDown = {(event) => event.key === "Enter" && onSearch() }
            onChange={(event) => setSearchID(event.target.value)}
          />
          <button onClick={() => onSearch()}>Enter</button>
        </div>
      </div>

      {loading ?
        /* Using a parentheses instead of {} in a map 
        function automatically returns those values */
        <div className="post">
          <div className="post__title">
            <div className="post__title--skeleton"></div>
          </div>
          <div className="post__body">
            <p className="post__body--skeleton"></p>
          </div>
        </div>
        :
        posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="post__title">{post.title}</div>
            <p className="post__body">{post.body}</p>
          </div>
      ))}

    </>
  );
}

export default Posts;


