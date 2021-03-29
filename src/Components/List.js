import React, { useEffect, useState} from 'react';
import {Card} from 'react-bootstrap';
import axios from 'axios'

// const users = 

const List = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    (async()=> {
      await axios('https://api.jsonapi.co/rest/v1/user/list').then((res)=>{        
        setUsers(res.data.data.users)
      }).catch((err)=>{
        console.log(err)
      })
    })();
  }, [])

  return (
    <div>{
      users && users.map(user => {
        return (
          <div key={user.id}>
            <Card>
              <Card.Body>
                <Card.Title>Name: {user.name}</Card.Title>
                <Card.Subtitle>Email: {user.email}</Card.Subtitle>
                <Card.Subtitle>Phone: {user.phoneNumber}</Card.Subtitle>
                <Card.Text>About: {user.about}</Card.Text>
              </Card.Body>
            </Card>
            <hr/>
          </div>
        );
      })
    }</div>    
  );   
}
export default List