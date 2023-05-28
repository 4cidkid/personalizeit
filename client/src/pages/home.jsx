import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <header>
      <div>
        <div className="flex space-evenly">
          <h1>Personalize It!</h1>
        </div>
        <div>
          <Link>Sign Up</Link>
          <Link>Log In</Link>
        </div>
      </div>
    </header>
  );
};
