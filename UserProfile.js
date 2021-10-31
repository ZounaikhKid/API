import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Spinner } from "react-bootstrap";

const UserProfile = ({match}) => {
    const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
    useEffect(() => {

        const fetchUser = async () => {
          try {
            const {data} = await axios.get(
              `https://jsonplaceholder.typicode.com/users/${match.params.id}`
            );

            setUser(data);
            setLoading(false);
          } catch (error) {
            console.log(error);
          }
        };
        fetchUser();
      }, [match.params]);
      if (loading) {
        return <Spinner animation="border" variant="danger" />;
      }
    return (
        <div>
                  <Card style={{ width: "18rem" }}>
          <span className='profil'>{user.name[0]}</span>

        <Card.Body>

          <Card.Title>{user.name}</Card.Title>
          <p>{user.username}</p>

          <p>{user.email}</p>
          <Link to='/'>
          <Button variant='danger'>Go Back</Button>
          </Link>
        </Card.Body>
      </Card>
        </div>
    )
}

export default UserProfile