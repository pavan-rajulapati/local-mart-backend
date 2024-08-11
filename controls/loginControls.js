const User = require('../models/user')
const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv')
const bcrypt = require('bcrypt')

dotEnv.config()
const key = process.env.SECRET_KEY;

const handleLogin = async(req,res)=>{
    const {email , password} = req.body
    try {
        let isExists = await User.findOne({email})
        if(!isExists){
            return res.status(401).json({message:'Invalid Credintials'})
        }

        const token = await jwt.sign({userId : isExists._id},key)

        let existingPassword = await bcrypt.compare(password , isExists.password)
        if(!existingPassword){
            return res.status(401).json({message:'Invalid Credintials'})
        }

        return res.status(200).json({message:'Login Successfully',token : token})
    } catch (error) {
        return res.status(500).json({message:'Internal Error'})
    }
}

module.exports = handleLogin