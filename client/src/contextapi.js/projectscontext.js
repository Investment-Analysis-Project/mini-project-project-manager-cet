import React from 'react';
import { createContext,useState } from 'react';

export const ProjectsContext = createContext();

export const ProjectsContextProvider = (props)=>{

    const [projects,setProjects]=useState([]);
    const [guides,setGuides]=useState([]);
    const [teams,setTeams]=useState([]);
    const [students,setStudents]=useState([]);
    const [url,setUrl]=useState("");

    const [domain,setDomain]=useState("");

    const addProject= (project)=>{
        setProjects([...projects,project]);
    };

    const addGuide= (guide)=>{
        setGuides([...guides,guide]);
    }

    const addTeam= (team)=>{
        setTeams([...teams,team]);
    }

    const addStudent= (student)=>{
        setStudents([...students,student]);
    }

    const contextValues={projects,setProjects,addProject,guides,setGuides,addGuide,teams,setTeams,addTeam,
        students,setStudents,addStudent,url,setUrl,domain,setDomain};

    return(
        <ProjectsContext.Provider value={contextValues}>
            {props.children}
        </ProjectsContext.Provider>
    );
};