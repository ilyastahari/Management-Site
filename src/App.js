import Login from './Login';
import Signup from './SignUp';
import CreateProject from './CreateProject';
import CreateTeam from './CreateTeam';
import ViewProject from './ViewProject';
import ViewTeam from './ViewTeam';
import Home from './Home';
import CreateTeamRoster from './CreateTeamRoster'
import CreateUserStory from './CreateUserStory'
import AssignUserStory from './AssignUserStory'
import EditUserStory from './AssignUserStory'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/Home" element = {<Home/>}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/CreateProject" element={<CreateProject />} />
        <Route path="/CreateTeam" element={<CreateTeam />} />
        <Route path="/ViewProject" element={<ViewProject />} />
        <Route path="/ViewTeam" element={<ViewTeam />} />
        <Route path="/CreateTeamRoster" element={<CreateTeamRoster />} />
        <Route path="/CreateUserStory" element={<CreateUserStory />} />
        <Route path="/AssignUserStory" element={<AssignUserStory />} />
        <Route path="/EditUserStory" element={<EditUserStory />} />
      </Routes>
    </div>
  );
}

export default App;