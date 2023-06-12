const fileUpload =require('express-fileupload');
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: "djaoxwoo8",
    api_key: "987231799232359",
    api_secret: "L_i_sLmpFNqyD1Fcbhiu5Ro_dC0"
});

const uploadAbstract = async(req,res)=>{
 
    if(req.files===null){
        return res.status(400).json({msg:'No file uploaded'});
    }

    const file=req.files.file;

    const result = cloudinary.uploader.upload(file.tempFilePath,{folder:"abstracts"});
    result.then((data) => {
        res.json({loaded:true,url:data.secure_url});
    }).catch((err) => {
        console.log(err);
    });
};


const uploadReport = async(req,res)=>{

    if(req.files===null){
        return res.status(400).json({msg:'No file uploaded'});
    }

    const file=req.files.file;

    const result = cloudinary.uploader.upload(file.tempFilePath,{folder:"report"});
    result.then((data) => {
        res.json({loaded:true,url:data.secure_url});
    }).catch((err) => {
        console.log(err);
    });
};

module.exports = {uploadAbstract,uploadReport};
