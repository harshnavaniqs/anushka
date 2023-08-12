// Card.js
import React from "react";
import "./App.css";

const Card = ({ title, priority, userId }) => (
  <div className="card">
    <h2>Title: {title}</h2>
    <p>Priority: {priority}</p>
    <p>User ID: {userId}</p>
  </div>
);

export default Card;
