const jwt = require('jsonwebtoken');
const createError = require('./error');

const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;

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
        if(req.user.user_id===req.params.id || req.user.isadmin){
            next();
        }
        else{
            return next(createError(401,"You are not authorized user"));
        }
    });
}

const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isadmin){
            next();
        }
        else{
            return next(createError(401,"You are not admin"));
        }
    });
}

module.exports={verifyToken,verifyUser,verifyAdmin};