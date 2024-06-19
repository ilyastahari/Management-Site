import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/CreateProject">Create Project</Link>
        </li>
        <li>
          <Link to="/CreateTeam">Create Team</Link>
        </li>
        <li>
          <Link to="/ViewProject">View Project</Link>
        </li>
        <li>
          <Link to="/ViewTeam">View Team</Link>
        </li>
        <li>
          <Link to="/CreateTeamRoster">Create Team Roster</Link>
        </li>
        <li>
          <Link to="/CreateUserStory">Create User Stories</Link>
        </li>
        <li>
            <Link to="/AssignUserStory">Assign User Story</Link>
        </li>
        <li>
            <Link to="/EditUserStory">Edit User Story</Link>
        </li>
      </ul>
    </nav>
  );
}
