import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/SignUp">SignUp</Link>
          </li>
          <li>
            <Link to="/CreateProject">CreateProject</Link>
          </li>
          <li>
            <Link to="/CreateTeam">CreateTeam</Link>
          </li>
          <li>
            <Link to="/ViewProject">ViewProject</Link>
          </li>
          <li>
            <Link to="/ViewTeam">ViewTeam</Link>
          </li>
          <li>
            <Link to="/CreateTeamRoster">CreateTeamRoster</Link>
          </li>
          <li>
            <Link to="/CreateUserStory">CreateUserStory</Link>
          </li>
          <li>
            <Link to="/AssignUserStory">AssignUserStory</Link>
          </li>
          <li>
            <Link to="/EditUserStory">EditUserStory</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Layout;
