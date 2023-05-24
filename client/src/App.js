import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Home } from './pages/home/Home';
import Project from './pages/project/Project';
import Guides from './pages/guides/Guides';
import Team from './pages/team/Team';
import { ProjectsContextProvider } from './contextapi.js/projectscontext';
import Teams from './pages/teams/Teams';
import Students from './pages/students/Students';

function App() {
  return (
    <ProjectsContextProvider>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/project/:id" element={<Project />}/>
            <Route path="/team/:id" element={<Team />}/>
            <Route path="/guides" element={<Guides />}/>
            <Route path="/teams" element={<Teams />}/>
            <Route path="/students" element={<Students />}/>
          </Routes>
        </BrowserRouter>
      </>
    </ProjectsContextProvider>
  );
}

export default App;