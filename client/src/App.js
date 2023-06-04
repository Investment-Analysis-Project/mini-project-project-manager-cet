import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Projects } from './pages/projects/Projects';
import Project from './pages/project/Project';
import Guides from './pages/guides/Guides';
import Guide from './pages/guide/Guide';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Admin from './pages/admin/Admin';
import EditGuide from './pages/editguide/EditGuide';
import { ProjectsContextProvider } from './contextapi.js/projectscontext';
import Similarity from './pages/similarity/Similarity';

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
            <Route path="/guide/:id" element={<Guide />}/>
            <Route path="/editguide/:id" element={<EditGuide />}/>
            <Route path="/admin" element={<Admin />}/>
            <Route path="/similarity" element={<Similarity />}/>
          </Routes>
        </BrowserRouter>
      </>
    </ProjectsContextProvider>
  );
}

export default App;