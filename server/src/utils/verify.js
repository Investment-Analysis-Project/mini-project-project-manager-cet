const jwt = require('jsonwebtoken');
const createError = require('./error');

const verifyToken = (req,res,next)=>{
    const authHead = req.headers.authorization;

    const token = authHead.split(' ')[1];

    if(token==="null"){
        return next(createError(401,"You are not logged in"));
    }

    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err){
            return next(createError(401,"You token is not valid"));
        }
        req.user=user;
        next();
    });
}

const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.user_id===req.params.id || req.user.isadmin){
            next();
        }
        else{
            return next(createError(401,"You are not authorized user"));
        }
    });
}

const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        
        if(req.user.isadmin){
            next();
        }
        else{  
            return next(createError(401,"You are not admin"));
        }
    });
}

module.exports={verifyToken,verifyUser,verifyAdmin};