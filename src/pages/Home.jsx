import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <ul>
        <li>
          <Link to="/onlinecourse">OnlineCourse</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
