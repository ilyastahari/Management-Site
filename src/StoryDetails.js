import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import './View.css';

const UserStory = () => {
  const { story_id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    axios.get('/getUserStory', { params: { story_id: story_id } })
      .then((res) => setStory(res.data))
      .catch((err) => console.log(err));
  }, [story_id]);

  return (
    <div className="user-story-page">
      <Navbar />
      <h1>User Story Details</h1>
      {story && (
        <div>
          <h2>{story.story_desc}</h2>
          <p>Project: {story.project.proj_name}</p>
          <p>Priority: {story.priority}</p>
        </div>
      )}
    </div>
  );
};

export default UserStory;