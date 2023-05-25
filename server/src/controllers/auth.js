const createError = require('../utils/error');
const jwt=require('jsonwebtoken');

const login = async(req,res,next)=>{
    try{
        const {username,password}=req.body;

        if(username !== process.env.ADMIN_USERNAME){
            res.json({message:"Wrong Username",isLoged:false});
        }
        else{
            if(password!== process.env.ADMIN_PASSWORD){
                res.json({message:"Wrong Password",isLoged:false});
            }
            else{
                res.json({message:"Admin Loged In",isLoged:true})
            }
        }

        // if(!user) return next(createError(404,"User not found"));

        // const isPasswordCorrect=await bcrypt.compare(req.body.password,user.password);
        // if(!isPasswordCorrect) return next(createError(404,"Incorrect username or password"));

        // const token=jwt.sign({id:user._id, isAdmin:user.isAdmin},process.env.JWT);

        // const{password,isAdmin,...otherDetails}=user._doc

        // res.cookie("access_token",token,{httpOnly:true}).status(200).json({...otherDetails});
    }catch(err){
        next(err);
    }
};

module.exports = {login};