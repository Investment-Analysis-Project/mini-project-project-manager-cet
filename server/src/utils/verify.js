const jwt = require('jsonwebtoken');
const createError = require('./utils');

const verifyToken = (req,res,next)=>{
    const token =req.cookies.access_token;

    if(!token){
        return next(createError(401,"You are not logged in"));
    }

    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err) return next(createError(401,"You token is not valid"));
        req.user=user;
        next();
    });
}

const verifyUser = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next();
        }
        else{
            return next(createError(401,"You are not authorized user"));
        }
    });
}

const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();
        }
        else{
            return next(createError(401,"You are not admin"));
        }
    });
}

module.exports={verifyToken,verifyUser,verifyAdmin};