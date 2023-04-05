import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>This Student ID of user is {id} </h1>
    </div>
  );
};

export default Profile;