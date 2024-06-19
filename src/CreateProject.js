import { Link } from 'react-router-dom';
import axios from 'axios';
import './CreateProject.css';
import {React,  useState, useEffect } from 'react';
import Navbar from './Navbar';

const CreateProject = () => {
  const [proj_name, setproj_name] = useState('');
  const [proj_desc, setproj_desc] = useState('');
  const [prod_owner_id, setprod_owner_id] = useState('');
  const [mgr_id, setmgr_id] = useState('');
  const [team_id, setteam_id] = useState('');
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);

  const handleCreateProject = (event, proj_name, proj_desc, prod_owner_id, mgr_id, team_id) => {
    event.preventDefault()
    axios.post('http://localhost:9000/createProject', { proj_name, proj_desc, prod_owner_id, mgr_id, team_id })
        .then(response => alert('Project created successfully!'))
        .catch((err) => alert('Error in Creating project'))
}

  useEffect(() => {
    axios.get('http://localhost:9000/getUsers')
    .then(function (response) {
      setUsers(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })

    axios.get('http://localhost:9000/getTeams')
  .then(function (response) {
    setTeam(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
  }, []);


  return (
    <div className="create-project">
      <Navbar />
      <h1>Create Project</h1>
      <div className="inner-div">
        <form>
          <br /><br />
          <label htmlFor="projectName"><b>Project Name</b></label><br />
          <input type="text" placeholder="Project Name" value={proj_name} onChange={(e) => setproj_name(e.target.value)} required/><br /><br />
          <label htmlFor="projectDescription"><b>Project Description</b></label><br />
          <input type="text" placeholder="Project Description" value={proj_desc} onChange={(e) => setproj_desc(e.target.value)} required/><br /><br />
         
          <label htmlFor="productOwner"><b>Product Owner</b></label><br /> 
          <select onChange={(e) => setprod_owner_id(e.target.value)} value={prod_owner_id}>
            <option value="">Select Product Owner</option>
            {users.map((user, index) => (
              <option key={index} value={user._id}>
                {user.fName} {user.lName}
              </option>
            ))}
          </select><br /><br />
          <label htmlFor="manager"><b>Manager</b></label><br />
          <select onChange={(e) => setmgr_id(e.target.value)} value={mgr_id}>
            <option value="">Select Manager</option>
            {users.map((user, index) => (
              <option key={index} value={user._id}>
                {user.fName} {user.lName}
              </option>
            ))}
          </select><br /><br />
          <label htmlFor="team"><b>Team</b></label><br />
          <select onChange={(e) => setteam_id(e.target.value)} value={team_id}>
            <option value="">Select Team</option>
            {team.map((team1, index) => (
              <option key={index} value={team1._id}>
                {team1.teamName}
              </option>
            ))}
          </select><br /><br />
          <button type="button" onClick={(event) => handleCreateProject(event, proj_name, proj_desc, prod_owner_id, mgr_id, team_id)}>
          Create Project
        </button><br /><br />
        <Link to="/">Log In</Link> {}<br /><br />
        <Link to="/SignUp">Sign Up</Link> {}<br /><br />
        <Link to="/Home">Home</Link> {}<br /><br />
        </form>
      </div>
    </div>
  );
}

export default CreateProject;