import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Projects } from './pages/projects/Projects';
import Project from './pages/project/Project';
import Guides from './pages/guides/Guides';
import Team from './pages/team/Team';
import Teams from './pages/teams/Teams';
import Students from './pages/students/Students';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { ProjectsContextProvider } from './contextapi.js/projectscontext';

function App() {
  return (
    <ProjectsContextProvider>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/project/:id" element={<Project />}/>
            <Route path="/guides" element={<Guides />}/>
            <Route path="/teams" element={<Teams />}/>
            <Route path="/team/:id" element={<Team />}/>
            <Route path="/students" element={<Students />}/>
          </Routes>
        </BrowserRouter>
      </>
    </ProjectsContextProvider>
  );
}

export default App;