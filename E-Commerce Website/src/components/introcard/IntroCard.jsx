import React from "react";
import "./IntroCard.css";
const IntroCard = ({ title }) => {
  return (
    <div>
      <div className="intro-container">
        <div className="intro-content">
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, natus
            hic aliquid optio amet aperiam quis laborum earum veniam maiores
            enim incidunt obcaecati voluptates asperiores ea est laboriosam.
            Tempore, delectus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
