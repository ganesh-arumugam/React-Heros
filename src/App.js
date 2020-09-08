import React from "react";

import { BasicForm } from "./Form";
import "./styles.css";
import { DisplayHeros } from "./DisplayHeros";

export default function App() {
  const [user, setUser] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUser(event.target.user.value);
  };

  return (
    <div className="App">
      <h1>Super Heros Save the World</h1>
      {!user && <BasicForm handleSubmit={handleSubmit} />}
      <DisplayHeros user={user} />
    </div>
  );
}
