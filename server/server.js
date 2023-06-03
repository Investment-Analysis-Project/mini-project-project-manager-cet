require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fileUpload =require('express-fileupload');
const auth_routes = require('./src/routes/auth');
const projects_routes = require('./src/routes/projects');
const faculty_routes = require('./src/routes/faculty');
const uploads_routes = require('./src/routes/uploads');
const user_routes = require('./src/routes/user');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload({useTempFiles: true}));
app.use(cookieParser());
app.use('/api/auth',auth_routes);
app.use('/api/projects', projects_routes);
app.use('/api/faculty', faculty_routes);
app.use('/api/uploads', uploads_routes);
app.use('/api/user',user_routes);

app.use((err,req,res,next)=>{ 
    const errorStatus = err.status|| 500;
    const errorMessage = err.message|| "Something went wrong!";
    res.json({
      success:false,
      status:errorStatus,
      message:errorMessage,
      stack:err.stack, 
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on PORT : ${PORT}`);
    console.log(`View devoplment server at http://localhost:${PORT}/`);
});