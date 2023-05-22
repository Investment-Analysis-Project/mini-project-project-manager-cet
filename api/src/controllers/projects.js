const getProjects = async (req, res) => {
    res.send(`List of all projects`);
};

const getProject = async (req, res) => {
    res.send(`Viewing Project ${req.params.id}`);
};

const createProject = async (req, res) => {
    res.send(`Project created`);
};

const updateProject = async (req, res) => {
    res.send(`Project updated`);
};

const deleteProject = async (req, res) => {
    res.send(`Project deleted`);
};

module.exports = {
    getProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject
};