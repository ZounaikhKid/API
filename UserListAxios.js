import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import UserCard from "./UserCard";

const UserListAxios = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/users")
    //   .then (res => res.data)

    //   .then((el) => {setUsers(el); setLoading(false) })
    //   .catch((error)=>console.log(error))
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  if (loading) {
    return <Spinner animation="border" variant="danger" />;
  }
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {users.map((el) => (
        <UserCard user={el} />
      ))}
    </div>
  );
};

export default UserListAxios;