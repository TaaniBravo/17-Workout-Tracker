const { Workout } = require("../models");

module.exports = (app) => {
  // GET Route for pulling all of the workouts in DB.
  app.get("/api/workouts", async (req, res) => {
    const workouts = await Workout.find();
    console.log(workouts);
    try {
      res.json(workouts);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  // POST Route for creating a workout.
  app.post("/api/workouts", async ({ body }, res) => {
    const newWorkout = await Workout.create(body);
    try {
      res.status(200).json(newWorkout);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  // PUT Route for updating a workout.
  app.put("/api/workouts/:id", async (req, res) => {
    const updateWorkout = await Workout.findByIdAndUpdate(req.params.id, {
      $push: {
        exercises: req.body,
      },
    });
    try {
      res.status(200).json(updateWorkout);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  app.get("/api/workouts/range", async (req, res) => {
    const range = await Workout.find({
      day: {
        $gte: new Date().setDate(new Date().getDate() - 7),
        $lte: Date.now(),
      },
    });
    console.log(range);
    try {
      res.status(200).json(range);
    } catch (error) {
      res.status(400).json(error);
    }
  });
};
