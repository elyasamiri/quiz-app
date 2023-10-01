import React from "react";

export default function StartScreen({ numQustions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the react Quiz!</h2>
      <h3> 15 questions to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Startn
      </button>
    </div>
  );
}
