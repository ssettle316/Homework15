var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exerciseSchema = new Schema(
    {
        day: { type: Date, default: Date.now },
        exercises: [{
            type: String, // String is shorthand for {type: String}
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }
        ]
    });

const Workout = mongoose.model("Workout", exerciseSchema);

module.exports = Workout;