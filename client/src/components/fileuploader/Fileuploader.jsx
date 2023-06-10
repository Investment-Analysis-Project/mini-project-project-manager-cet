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
    

    const {setab_Url,setloadstatus,loadstatus,clicked,setclicked}=useContext(ProjectsContext);

    const change = (e) => {
        setfile(e.target.files[0]);
        setfilename(e.target.files[0].name);
    }

    const submit = async (e)=> {
        e.preventDefault();

        setclicked(true);

        const formData = new FormData();
        formData.append('file',file);
    
        try{  
            const res = await baseurl.post('/uploads',formData,{
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

  return (
    <div className='inputupload'>
        <input type="file" className="customfile" onChange={change}/>
        {clicked && (loadstatus ? (<button className='loadstatus'><FontAwesomeIcon icon={faCheckCircle}/></button>):
            (<button className='loadstatus'><FontAwesomeIcon icon={faSpinner} spin/></button>))
        }
        <button className='upbut' onClick={submit}> <FontAwesomeIcon icon={faUpload}/> Upload</button>
    </div>
  );
}

export default Fileupload;