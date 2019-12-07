import React from "react";

const MissionKey = props => {
  return (
    <div className="my-3 text-center">
      <h1 className="display-4 my-3">Launches</h1>
      <p>
        <span className="px-3 mx-2 bg-success" />= Success
        <span className="px-3 mx-2 bg-danger" />= Fail
      </p>
      <p></p>
    </div>
  );
};

export default MissionKey;
