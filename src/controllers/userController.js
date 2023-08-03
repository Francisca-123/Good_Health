const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const {createUser, getUserByEmail} = require('../services/userService')

async function signup(req, res, next){
    try{
        const { firstname, lastname, email, password, telephone, address} = req.body

        if(!firstname || !lastname || !email || !password || !telephone || !address){
            return res.status(400).json({
                success: false,
                message:"Invalid. All fields required "
            })
        }

        const existingUser = await getUserByEmail(email);
        

        if(existingUser){
            return res.status(400).json({message:`User already exist. Sign in instead`});
        }

        const hashPassword = bcrypt.hashSync(password, 10);
        await createUser({
            firstname,
            lastname,
            email,
            password: hashPassword,
            telephone,
            address
        });

        return res.status(201).json({
            success:true,
            message:`User created successfully`
        });
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message: " internal server error"});
    }
}

async function login(req, res, next){
    try{
        const{email, password} = req.body

        if(!email || !password){
            return res.status(400).json
        }

        const userexisting = await getUserByEmail(email);
        const passwordMatch = await bcrypt.compare(password, userexisting.password)
        if(!userexisting || !passwordMatch){
            return res.status(401).json({
                success: false,
                message:`Invalid email or password `
            })
        }

        const tokenPayload = jwt.sign({email:userexisting.email,id: userexisting._id}, process.env.JWT_SECRET || "Francisca123." ,
        {
            expiresIn:'1h'
        });

        return res.status(200).json({
            success: true,
            message: "Login Successfully",
            tokenPayload,
        });
}

    catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:`Internal server error`
        });
    }
    
};

module.exports = {
    signup,
    login
}