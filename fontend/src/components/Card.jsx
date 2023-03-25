import React from "react";
import "../styles/card.css"

const Card = ({ user }) => {
    return (
        <div className="card-container">
            <p>{user.name}</p>
            <p>{user.job}</p>
            <p>{user.hobby}</p>
        </div>
    );
}
const user = {
  name: 'John Doe',
  job: 'Web Developer',
  hobby: 'Playing guitar'
};
export default Card;