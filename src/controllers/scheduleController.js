const scheduleModel = require("../models/workScheduleModel")

async function saveSchedule(req, res, next){

    try{
        const {work_duration, take_a_break_after, break_Duration} = req.body
        const {userId} = req.params

        if(!work_duration || !take_a_break_after || !break_Duration){
            return res.status(400).json({
                success: false,
                message:"Input all fields"
            })}

        const newSchedule = await new scheduleModel({
            work_duration :  work_duration,
            take_a_break_after : take_a_break_after,
            break_Duration : break_Duration,
            user_id : userId
        }).save()

        return res.status(200).json({
            success: true,
            message:"schedule created",
            schedule:newSchedule
        })
    }
    catch(error){
        next(error)
    }
}

module.exports = saveSchedule