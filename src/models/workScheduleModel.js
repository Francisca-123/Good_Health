const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema ({
    user_id :{
        type: String
    },

    work_duration:{
        type: Number,
        required: true
    },

    take_a_break_after:{
        type: Number,
        required: true
    },
    break_Duration:{
        type: Number,
        required: true
    }
})

const scheduleModel = mongoose.model('schedule', scheduleSchema)

module.exports = scheduleModel