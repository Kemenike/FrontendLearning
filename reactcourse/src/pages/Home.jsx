import React, { useEffect, useState } from "react";
import axios from 'axios'
import User from './User'
import { Link } from "react-router-dom";

function Home () {
    const [users, setUsers] = useState([]);

    async function getUsers() {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(data);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return(
        <div>
            {
                users.map((user) => (
                    <Link to={`/users/${user.id}`} key={user.id}>
                        <User 
                            id={user.id} 
                            name={user.name} 
                            email={user.email} 
                            username={user.username} />
                    </Link>
                ))
            }
        </div>
    );
}

export default Home;