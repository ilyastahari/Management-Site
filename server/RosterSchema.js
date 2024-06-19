const mongoose = require("mongoose");

const RosterSchema = new mongoose.Schema({
    team_id: mongoose.Schema.Types.ObjectId,
    users: [mongoose.Schema.Types.ObjectId] 
});

const Roster = mongoose.model("Roster", RosterSchema);

module.exports = Roster;