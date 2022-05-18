const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "task name is needed"],
        trim: true,
        maxlength: [20, "task name need to be less than 20 letters"],
    },
    completed: {
        type: Boolean,
        default: false,

    }
});

module.exports = mongoose.model("Task", TaskSchema);