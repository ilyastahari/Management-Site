import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './AssignUserStory.css';

function EditUserStory() {
    const [userStories, setUserStories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9000/getAllUserStories')
            .then(response => {
                setUserStories(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleEditUserStory = (id, currentDescription) => {
        const newDescription = window.prompt("Enter the new description:", currentDescription);
        if (newDescription !== null) {
            updateUserStory(id, newDescription);
        }
    }

    const updateUserStory = (userStoryId, newDescription) => {
        alert(newDescription);
        axios.put(`http://localhost:9000/updateUserStories/${userStoryId}`, { desc: newDescription })
            .then(response => {
                alert("User story updated successfully!");
            })
            .catch(error => {
                console.error("Error updating user story:", error);
            });
    }

    const handleDeleteUserStory = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user story?");
        if (confirmDelete) {
            axios.delete(`http://localhost:9000/userStories/${id}`)
                .then(response => {
                    console.log("Response received:", response);
                    console.log("User story deleted successfully");
                })
                .catch(error => {
                    console.error("Error deleting user story:", error);
                });
        }
    }

    return (
        <div className="edit-user-story-container">
            <Navbar />
            <h2>Edit User Stories</h2>
            <div className="list">
                {userStories.map(story => (
                    <div className="user-story" key={story._id}>
                        <p><strong>User Story:</strong> {story.userStory}</p>
                        <p><strong>Priority:</strong> {story.priority}</p>
                        <button onClick={() => handleEditUserStory(story._id)}>Edit</button>
                        <button onClick={() => handleDeleteUserStory(story._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EditUserStory;