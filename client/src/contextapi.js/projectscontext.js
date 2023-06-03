import React from 'react';
import { createContext,useState } from 'react';

export const ProjectsContext = createContext();

export const ProjectsContextProvider = (props)=>{

    const [projects,setProjects]=useState([]);
    const [guides,setGuides]=useState([]);
    const [abstract_url,setab_Url]=useState("");
    const [report_url,setreport_Url]=useState("");
    const [hosted_url,sethosted_Url]=useState("");
    const [code_url,setcode_Url]=useState("");
    const [domain,setDomain]=useState("All");
    const [program,setProgram]=useState("All");
    const [year,setYear]=useState("All");
    const [status,setStatus]=useState("All");
    const [auth,setAuth]=useState(false);
    const [skill,setSkill]=useState("All");
    const [isAdmin,setisAdmin]=useState(false);
    const [user_id,setUser_id]=useState("");
 
    const addProject= (project)=>{
        setProjects([...projects,project]);
    };

    const addGuide= (guide)=>{
        setGuides([...guides,guide]);
    }

    const contextValues={projects,setProjects,addProject,guides,setGuides,addGuide,domain,
        setDomain,status,setStatus,program,setProgram,year,setYear,auth,setAuth,skill,setSkill,
        abstract_url,setab_Url,report_url,setreport_Url,hosted_url,sethosted_Url,
        code_url,setcode_Url,isAdmin,setisAdmin,user_id,setUser_id};

    return(
        <ProjectsContext.Provider value={contextValues}>
            {props.children}
        </ProjectsContext.Provider>
    );
};