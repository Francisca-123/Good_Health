const scheduleRouter = require("express").Router()
const verifyAuth = require("../middlewares/basic_auth")
const saveSchedule = require("../controllers/scheduleController")

scheduleRouter.post("/createschedule", verifyAuth, saveSchedule )

module.exports = scheduleRouter