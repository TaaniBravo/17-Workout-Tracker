const { Workout } = require("../models")
// const mongoose = require("mongoose");

module.exports = app => {

    app.get("/api/workouts", async (req, res) => {
        const data = await Workout.find({})
        try {
            res.send(data);
        } catch (error) {
            res.status(400).json(error);
        };
    });

};