const { InvalidOrExpiredToken, AuthForbiddenException} = require("../../server/config/errorHandling")
const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


async function verifyAuth(req, res, next){
   try{
        if(!req.headers.authorization){
            return res.status(401).json({
                success:false,
                message:"Unauthorized Operations"
            })
    }

    const token = req.headers.authorization.split(" ")[1]

    const splitUser = jwt.verify(token, process.env.JWT_SECRET)
    console.log(splitUser);
    const userId = splitUser.id
    if(!userId){
        return res.status(401).json({
            success:false,
            message:`Unathorized operation`
        })
    }


    const auth = await userModel.findById(userId)

    if(!auth){
        return res.status(401).json({
            success:false,
            message:`Unauthorized operation`
        })
    }
    req.user = splitUser

    next()
}
catch(error){
    
    next(error)
}

}

module.exports = verifyAuth