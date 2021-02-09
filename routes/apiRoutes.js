const { Workout } = require("../models")
// const mongoose = require("mongoose");

module.exports = app => {

    app.get("/api/workouts", async (req, res) => {
        const data = await Workout.find()
        try {
            console.log(data)
            res.json(data);
        } catch (error) {
            res.status(400).json(error);
        };
    });

};