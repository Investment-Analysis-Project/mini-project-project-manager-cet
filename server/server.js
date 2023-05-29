require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fileUpload =require('express-fileupload');
const projects_routes = require('./src/routes/projects');
const guides_routes = require('./src/routes/guides');
const teams_routes = require('./src/routes/teams');
const students_routes = require('./src/routes/students');
const uploads_routes = require('./src/routes/uploads');
const auth_routes = require('./src/routes/auth');

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload({useTempFiles: true}));
app.use('api/auth',auth_routes);
app.use('api/projects', projects_routes);
app.use('api/guides', guides_routes);
app.use('api/teams', teams_routes);
app.use('api/students', students_routes);
app.use('api/uploads', uploads_routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on PORT : ${PORT}`);
    console.log(`View devoplment server at http://localhost:${PORT}/`);
});