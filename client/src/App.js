import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Projects } from './pages/projects/Projects';
import Project from './pages/project/Project';
import Guides from './pages/guides/Guides';
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
          </Routes>
        </BrowserRouter>
      </>
    </ProjectsContextProvider>
  );
}

export default App;