import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import './View.css';

const Team = () => {
  const { team_id } = useParams();
  const [team, setTeam] = useState(null);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('/getTeam', { params: { team_id: team_id } })
      .then((res) => setTeam(res.data))
      .catch((err) => console.log(err));
  }, [team_id]);

  useEffect(() => {
    axios.get('/getTeamMembers', { params: { team_id: team_id } })
      .then((res) => setMembers(res.data))
      .catch((err) => console.log(err));
  }, [team_id]);

  return (
    <div className="team-page">
      <Navbar />
      <h1>Team Details</h1>
      {team && (
        <div>
          <h2>{team.teamName}</h2>
          <h3>Members:</h3>
          <ul>
            {members.map((member) => (
              <li key={member._id}>
                {member.fName} {member.lName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Team;
