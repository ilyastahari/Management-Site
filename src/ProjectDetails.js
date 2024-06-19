import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import './View.css';

const Project = () => {
  const { project_id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios.get('/getProject', { params: { project_id: project_id } })
      .then((res) => setProject(res.data))
      .catch((err) => console.log(err));
  }, [project_id]);

  return (
    <div className="project-page">
      <Navbar />
      <h1>Project Details</h1>
      {project && (
        <div>
          <h2>{project.proj_name}</h2>
          <p>Description: {project.proj_desc}</p>
          <p>Manager: {project.mgr_id.fName} {project.mgr_id.lName}</p>
          <p>Owner: {project.prod_owner_id.fName} {project.prod_owner_id.lName}</p>
          <p>Team: {project.team_id.teamName}</p>
        </div>
      )}
    </div>
  );
};

export default Project;
