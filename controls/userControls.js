const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const handleUser = async(req,res)=>{
    const {userName,email,password} = req.body
    try {
        const {userName,email,password} = req.body
        const isExist = await User.findOne({email})

        if(isExist){
            return res.status(401).json({message:'user already existed'})
        }

        const hashedPass = await bcrypt.hash(password,9)

        const newUser = new User({
            userName,
            email,
            password:hashedPass,
        })
        newUser.save()

        return res.status(200).json({message:'user registred successfully'})
    } catch (error) {
        return res.status(404).json({message:"Internal Error"})
    }
}

module.exports = handleUser