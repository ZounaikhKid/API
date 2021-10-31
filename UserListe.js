import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {setUsers(data); setLoading(false) })
      .catch((error)=>console.log(error))

  }, []);
  if (loading) {
      return <Spinner animation="border" variant="danger" />
  }
  return <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
      {users.map(
          (el)=>  <UserCard user={el} />
      )}
  </div>;
};

export default UserList;