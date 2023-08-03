const user = require ("../models/userModel")

const createUser = async (details)=>{
    const newUser = await user.create(details)
    return newUser
}

async function getUserByEmail(email) {
    try{
    const userEmail = await user.findOne({email}).exec()
    return userEmail

    }
    catch(error){
        // throw new Error("Failed to fetch user by email")
        console.log(error);
    }
}

module.exports ={
    createUser,
    getUserByEmail
}