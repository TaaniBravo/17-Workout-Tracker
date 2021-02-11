// Mongoose model declartion setup.
const mongoose = require("mongoose");
mongoose.set("debug", true);
// Define the mongoose Schema method as a const we can neatly call upon.
const Schema = mongoose.Schema;

// Our Workout schema.
const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          required: [true, "This exercise needs a type."],
        },
        name: {
          type: String,
          required: [true, "This exercise needs a name."],
        },
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// A virtual for the total duration of a workout as we don't want it to be in the actual model itself.
WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((acc, exercise) => {
    return acc + exercise.duration;
  }, 0);
});

// A const that we will use as the mold for creating new workouts.
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
