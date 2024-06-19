const express = require('express');
const cors = require('cors');
const app = express();
const Project = require('./Projects.js')
const Team = require('./TeamName.js')
const Roster = require('./RosterSchema.js')
const Story = require('./StorySchema.js')

app.use(express.json());
app.use(cors())
app.listen(9000, () => {
    console.log('Server Started at ${9000}')
})

const mongoose = require('mongoose');
const User = require('./UserSchema');
const mongoString = "mongodb+srv://itahari:Applesauceee@Cluster0.wvu5ise.mongodb.net/lab"
mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => console.log(error))
database.once('connected', () => console.log('Database Connected'))

app.post('/CreateUser', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save()
        res.send(user)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

app.get('/getUser', async (req, res) => {
    const uname = req.query.uname
    const pword = req.query.pword
    try {
        const user = await User.findOne({ uname, pword })
        res.send(user)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

app.post('/createProject', async (req, res) => {
    try {
            console.log(req.body);
            const project = new Project(req.body);
            project.save()
            console.log(`Project created! ${project}`)
            res.send(project)
    }
    catch (error){
        res.status(500).send(error)
    }
})

app.get('/getUsers', async (req, res) => {
    try {
        const userList = await User.find({}, {fName:1, lName:1});
        res.send(userList)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

app.get('/getprojectID', async (req, res) => {
    try {
        const projectList = await Project.find();
        res.send(projectList)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

app.get('/getProjects', async (req, res) => {
    try {
        const projects = await Project.find();
        let responseDetails = [];
        for (const project of projects) {
           const Manager = await User.findById(project.mgr_id);
           const Owner = await User.findById(project.prod_owner_id);
           const Teams = await Team.findById(project.team_id);
           responseDetails.push({
            proj_name: project.proj_name,
            proj_desc: project.proj_desc,
            mgr_id: Manager,
            prod_owner_id: Owner,
            team_id: Teams
           });
        }
        res.send(responseDetails);
    }
    catch (error) {
        res.status(500).send(error);
    }
});

app.post('/CreateTeam', async (req, res) => {
    try {
            const team = new Team(req.body);
            team.save()
            console.log(`Team created! ${team}`)
            res.send(team)
    }
    catch (error){
        res.status(500).send(error)
    }
})

app.get('/getTeams', async (req, res) => {
    try {
        const teamList = await Team.find({},{teamName:1});
        res.send(teamList)
    }
    catch (error) {
        res.status(500).send(error)
    }
})

app.post('/CreateTeamRoster', async (req, res) => {
    try {
            const roster = new Roster(req.body);
            roster.save()
            console.log(`Roster created! ${roster}`)
            res.send(roster)
    }
    catch (error){
        res.status(500).send(error)
    }
})

app.post('/CreateUserStory', async (req, res) => {
    try {
            const story = new Story(req.body);
            story.save()
            console.log(`Story created! ${story}`)
            res.send(story)
    }
    catch (error){
        res.status(500).send(error)
    }
})

app.get('/UnassignedStories', async (req, res) => {
    try {
        const stories = await Story.find({ assigned: null });
        res.send(stories);
    } catch (error) {
        res.status(500).send(error);
    }
});


app.post('/AssignStory', async (req, res) => {
    const { storyId, userId } = req.body;
    try {
        const story = await Story.findById(storyId);
        if (!story) {
            return res.status(404).send("Story not found"); 
        }
        story.assigned = userId; 
        await story.save();
        
        res.send(story);
    } catch (error) {
        res.status(500).send(error); 
    }
});

app.put('/updateUserStories/:id', async (req, res) => {
    const userStoryId = req.params.id;
    const newDescription = req.body.description;

    try {
        const userStory = await Story.findByIdAndUpdate(userStoryId, { description: newDescription }, { new: true });

        if (!userStory) {
            return res.status(404).send("User story not found");
        }

        res.status(200).send("User story updated successfully");
    } catch (error) {
        console.error("Error updating user story:", error);
        res.status(500).send("Error updating user story");
    }
});

app.get('/getAllUserStories', async (req, res) => {
    try {
        const stories = await Story.find();
        res.send(stories);
    } catch (error) {
        res.status(500).send(error);
    }
});