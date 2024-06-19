const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
    userStory: String,
    proj_name: mongoose.Schema.Types.ObjectId,
    priority: Number,
    assigned: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }
});

const Story = mongoose.model("Story", StorySchema);

module.exports = Story;