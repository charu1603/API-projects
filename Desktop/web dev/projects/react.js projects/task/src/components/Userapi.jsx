import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Userapi.css';
const UserListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch('https://randomuser.me/api/') 
      .then((res) => res.json())
      .then((data) => {
        const usersData = data.results.map((user, index) => ({
          id: index+1,
          name: `${user.name.first} ${user.name.last}`,
          avatar: user.picture.large,
          title: user.name.title,
         
        }));
        setUsers(usersData);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>User List Page</h1>
      <div className="card-container">
        {users.map((user) => (
          <Link to={`/Users/${user.id}`} key={user.id}>
            <div className="card">
              <div className='cardimg'>
              <img src={user.avatar} alt="User Avatar" /></div>
              <div className="cardcontent">
              <h2>ID: {user.id}</h2>
              <p>Name: {user.name}</p>
              <p>Title: {user.title}</p></div>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserListPage;
