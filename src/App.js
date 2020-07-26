import React, { useState, useEffect } from "react";
import "./styles.css";
import Grid from "@material-ui/core/Grid";
import PplCard from "./PplCard";
export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setUsers(
        await fetch("https://reqres.in/api/users?page=2")
          .then(res => res.json())
          .then(res => res.data)
          .catch(err => console.log(err))
      );
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <h3>Responsive Grid Hooks </h3>
      <Grid container spacing={10}>
        {users.map(user => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
            <PplCard
              key={user.id}
              firstName={user.first_name}
              email={user.email}
              lastName={user.last_name}
              avatar={user.avatar}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
