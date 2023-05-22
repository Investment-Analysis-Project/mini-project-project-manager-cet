require('dotenv').config();
const express = require('express');
const projects_routes = require('./src/routes/projects');
const guides_routes = require('./src/routes/guides');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/projects', projects_routes);
app.use('/guides', guides_routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on PORT : ${PORT}`);
    console.log(`View devoplment server at http://localhost:${PORT}/`);
});