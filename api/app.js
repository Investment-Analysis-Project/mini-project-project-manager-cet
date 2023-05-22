require('dotenv').config();
const express = require('express');
const projects_routes = require('./src/routes/projects');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/projects', projects_routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on PORT : ${PORT}`);
    console.log(`view devoplment server at http://localhost:${PORT}/`);
});