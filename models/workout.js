const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: Date,
    exercises: [{
        type: {
            type: String,
            required: [true, "This exercise needs a type."]
        },
        name: {
            type: String,
            required: [true, "This exercise needs a name."]
        },
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number
        
    }]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout