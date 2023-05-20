const express = require('express');
const app = express();
const projects_routes = require('./src/routes/projects');

require('dotenv').config();
const port = process.env.PORT || 3000;
console.log(process.env.PORT);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log(`view devoplment server at http://localhost:${port}/`);
});

app.use('/api/projects', projects_routes);