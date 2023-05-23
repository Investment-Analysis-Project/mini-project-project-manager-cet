import React from 'react';
import { createContext,useState } from 'react';

export const ProjectsContext = createContext();

export const ProjectsContextProvider = (props)=>{

    const [projects,setProjects]=useState([]);

    const [url,setUrl]=useState("");

    const addProject= (project)=>{
        setProjects([...projects,project]);
    };

    const contextValues={projects,setProjects,addProject,url,setUrl};

    return(
        <ProjectsContext.Provider value={contextValues}>
            {props.children}
        </ProjectsContext.Provider>
    );
};