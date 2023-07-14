import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Users = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = () => {
    fetch(`https://randomuser.me/api/`)
      .then((res) => res.json())
      .then((data) => {
        const userData = data.results[0];
        const userDetails = {
          id,
          name: `${userData.name.first} ${userData.name.last}`,
          avatar: userData.picture.large,
          title: userData.name.title,
          // Add other user details as needed
        };
        setUser(userDetails);
      })
      .catch((error) => console.log(error));
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Details Page</h1>
      <h2>ID: {user.id}</h2>
      <p>Name: {user.name}</p>
      <p>Title: {user.title}</p>
      <img src={user.avatar} alt="User Avatar" />
      {/* Display other user details */}
    </div>
  );
};

export default Users;
