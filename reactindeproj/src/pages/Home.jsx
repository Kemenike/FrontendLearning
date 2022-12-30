import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {

  let navigate = useNavigate();

  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    users.map((user) => (
      <div className="container" key={user.id}>
        <div className="row">
          <div className="user-list">
            <div className="user">
              <div className="user-card"
                onClick={() => navigate(`/${user.id}`)}>
                <div className="user-card__container">
                  <h3>{user.name}</h3>
                  <p>
                    <b>Email:</b> {user.email}
                  </p>
                  <p>
                    <b>Phone:</b> {user.phone}
                  </p>
                  <p>
                    <b>Website:</b>
                    {user.website}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  );
}

export default Home;