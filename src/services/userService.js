const user = require ("../models/userModel")

const createUser = async ()=>{
    const newUser = await user.create(user)

    return newUser
}

async function getUserByEmail(email) {
    try{
    const userEmail = await user.findOne({email}).exec()
    return userEmail

    }
    catch(error){
        throw new Error("Failed to fetch user by email")
    }
}

module.exports ={
    createUser,
    getUserByEmail
}