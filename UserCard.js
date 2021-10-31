import React from "react";
import { Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
          <span className='profil'>{user.name[0]}</span>

        <Card.Body>

          <Card.Title>{user.name}</Card.Title>
          <p>{user.username}</p>

          <p>{user.email}</p>
          <Link to={`/profile/${user.id}`}>
          <Button variant='danger'>Get Informations</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;