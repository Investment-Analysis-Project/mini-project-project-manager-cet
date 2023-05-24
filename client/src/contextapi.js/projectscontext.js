import React from 'react';
import { createContext,useState } from 'react';

export const ProjectsContext = createContext();

export const ProjectsContextProvider = (props)=>{

    const [projects,setProjects]=useState([]);
    const [guides,setGuides]=useState([]);
    const [teams,setTeams]=useState([]);
    const [students,setStudents]=useState([]);
    const [url,setUrl]=useState("");

    const addProject= (project)=>{
        setProjects([...projects,project]);
    };

    const addGuide= (guide)=>{
        setGuides([...guides,guide]);
    }

    const addTeam= (guide)=>{
        setGuides([...teams,guide]);
    }

    const addStudent= (guide)=>{
        setGuides([...students,guide]);
    }

    const contextValues={projects,setProjects,addProject,guides,setGuides,addGuide,teams,setTeams,addTeam,
        students,setStudents,addStudent,url,setUrl};

    return(
        <ProjectsContext.Provider value={contextValues}>
            {props.children}
        </ProjectsContext.Provider>
    );
};