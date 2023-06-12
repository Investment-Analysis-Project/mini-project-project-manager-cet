import React, { useContext, useState } from 'react';
import baseurl from '../../baseurl/baseurl';
import { Fragment } from 'react';
import './fileuploader.css';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle,faUpload} from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Fileupload = () => {

    const [filename,setfilename]=useState('Chose File');
    const [file,setfile]=useState('');
    

    const {setloadstatus,loadstatus,clicked,setclicked,
        abstract_url,setab_Url,report_url,setreport_Url,hosted_url,sethosted_Url,
        code_url,setcode_Url,clkrep,setclkrep,repstatus,setrepstatus}=useContext(ProjectsContext);

    const change = (e) => {
        setfile(e.target.files[0]);
        setfilename(e.target.files[0].name);
    }

    const submit_abstract = async (e)=> {
        e.preventDefault();

        setclicked(true);

        const formData = new FormData();
        formData.append('file',file);
    
        try{  
            const res = await baseurl.post('/uploads/abstract',formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            });
            console.log(res.data)
            const fileUrl=res.data.url;
            setab_Url(fileUrl);
            setloadstatus(res.data.loaded);
        }catch(err){
            console.log(err);
        }
    }   

    const submit_report = async (e)=> {
        e.preventDefault();

        setclkrep(true);

        const formData = new FormData();
        formData.append('file',file);
    
        try{  
            const res = await baseurl.post('/uploads/report',formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            });
            console.log(res.data)
            const fileUrl=res.data.url;
            setreport_Url(fileUrl);
            setrepstatus(res.data.loaded);
        }catch(err){
            console.log(err);
        }
    } 

  return (
    <>
        <div className='inputupload'>
            <input type="file" className="customfile" onChange={change}/>
            {clicked && (loadstatus ? (<button className='loadstatus'><FontAwesomeIcon icon={faCheckCircle}/></button>):
                (<button className='loadstatus'><FontAwesomeIcon icon={faSpinner} spin/></button>))
            }
            <button className='upbut' onClick={submit_abstract}> <FontAwesomeIcon icon={faUpload}/> Abstract</button>
        </div>

        <div className='inputupload'>
            <input type="file" className="customfile" onChange={change}/>
            {clkrep && (repstatus ? (<button className='loadstatus'><FontAwesomeIcon icon={faCheckCircle}/></button>):
                (<button className='loadstatus'><FontAwesomeIcon icon={faSpinner} spin/></button>))
            }
            <button className='upbut' onClick={submit_report}> <FontAwesomeIcon icon={faUpload}/> Report</button>
        </div>
    </>
  );
}

export default Fileupload;