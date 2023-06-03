import React from 'react';
import { createContext,useState } from 'react';

export const ProjectsContext = createContext();

export const ProjectsContextProvider = (props)=>{

    const [projects,setProjects]=useState([]);
    const [guides,setGuides]=useState([]);
    const [url,setUrl]=useState("");
    const [domain,setDomain]=useState("All");
    const [program,setProgram]=useState("All");
    const [year,setYear]=useState("All");
    const [status,setStatus]=useState("All");
    const [auth,setAuth]=useState(false);
    const [skill,setSkill]=useState("All");
 
    const addProject= (project)=>{
        setProjects([...projects,project]);
    };

    const addGuide= (guide)=>{
        setGuides([...guides,guide]);
    }

    const contextValues={projects,setProjects,addProject,guides,setGuides,addGuide,url,setUrl,domain,
        setDomain,status,setStatus,program,setProgram,year,setYear,auth,setAuth,skill,setSkill};

    return(
        <ProjectsContext.Provider value={contextValues}>
            {props.children}
        </ProjectsContext.Provider>
    );
};