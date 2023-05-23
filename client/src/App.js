import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Home } from './pages/home/Home';
import Project from './pages/project/Project';
import Guides from './pages/guides/Guides';
import { ProjectsContextProvider } from './contextapi.js/projectscontext';


function App() {
  return (
    <ProjectsContextProvider>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/project" element={<Project />}/>
            <Route path="/guides" element={<Guides />}/>
          </Routes>
        </BrowserRouter>
      </>
    </ProjectsContextProvider>
  );
}

export default App;