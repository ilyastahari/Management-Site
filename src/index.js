import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Signup from './SignUp';
import CreateProject from './CreateProject'
import CreateTeam from './CreateTeam'
import ViewProject from './ViewProject'
import ViewTeam from './ViewTeam'
import Home from './Home'
import CreateTeamRoster from './CreateTeamRoster'
import CreateUserStory from './CreateUserStory'
import AssignUserStory from './AssignUserStory'
import EditUserStory from './EditUserStory'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path = "/" element = {<Login/>}/>
    <Route path = "/Login" element = {<Login/>}/>
    <Route path = "/Signup" element = {<Signup/>}/>
    <Route path = "/CreateProject" element = {<CreateProject/>}/>
    <Route path = "/CreateTeam" element = {<CreateTeam/>}/>
    <Route path="/ViewProject" element={<ViewProject />} />
    <Route path="/ViewTeam" element={<ViewTeam />} />
    <Route path = "/Home" element = {<Home/>}/>
    <Route path="/CreateTeamRoster" element={<CreateTeamRoster />} />
    <Route path="/CreateUserStory" element={<CreateUserStory />} />
    <Route path="/AssignUserStory" element={<AssignUserStory />} />
    <Route path="/EditUserStory" element={<EditUserStory />} />
    </>
  )
)

root.render(
  <React.StrictMode>
    <RouterProvider router = {router}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();