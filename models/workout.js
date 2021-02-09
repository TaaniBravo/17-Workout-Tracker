const mongoose = require("mongoose");
mongoose.set('debug', true)
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
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
            sets: Number,
            distance: Number
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout