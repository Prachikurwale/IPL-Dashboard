
const mongoose = require('mongoose');

const MatchSchema = mongoose.Schema({
    team1: {
        type: String,
        required: true,
    },
    team2: {
        type: String,
        required: true,
    },
    score1: {
        type: String, 
        default: '0/0',
    },
    overs1: {
        type: String, 
        default: '0.0',
    },
    score2: {
        type: String,
        default: '0/0',
    },
    overs2: {
        type: String,
        default: '0.0',
    },
    status: {
        type: String,
        enum: ['Live', 'Completed', 'Upcoming'], 
        required: true,
    },
    result: {
        type: String,
        default: 'Match in Progress',
    }
}, {
    timestamps: true 
});

const Match = mongoose.model('Match', MatchSchema);

module.exports = Match;