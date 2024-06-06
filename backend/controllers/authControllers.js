const express=require('express');
const jwt=require('jsonwebtoken');

const User=require('../models/user');
const {hashPassword,comparePassword}=require('../helpers/auth');

const test=(req,res)=>{
    res.json('test is working')
}
//register end point
const register=async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        //check is username is entered
        if(!username){
            return res.status(400).json({
                error:'username is required'
            })
        };
        //check email
        const exist=await User.findOne({email})
        if(exist){
            return res.status(400).json({
                error:'Email is taken already'
            })
        };
        //check password
        if(!password|| password.length<6){
            return res.status(400).json({
                error:'Password is required and should be atleast 6 characters'
            })
        };
        //password protection
        const hashedPassword=await hashPassword(password)

        //create User in database
        const newUser=new User({username,email,password:hashedPassword});
        const user=await newUser.save();
        return res.json(user);         //return newly created user
    }catch(error){
        console.log(error);
        return res.status(500).json({error:'Internal server error'});
    }   
}
//login end point
const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        //check if user exists
        const user=await User.findOne({email});
        
        if(!user){
            return res.status(400).json({
                error:'No User found'
            })
        } 
        //check if passwords match
        const match=await comparePassword(password,user.password);
    
        if(!match){
            return res.status(400).json({
                error:"Incorrect password"
            });
        }
            //generate jwt token
        const token=jwt.sign({email:user.email,id:user._id,username:user.username},process.env.JWT_SECRET);
        //set token in cookie and send user data
        res.cookie('token',token,{httpOnly:true}).json({token,user})
    }catch(error){
        return res.status(500).json({error:'Internal server error'});
    }
}

module.exports={test,register,login};