import React, { useContext, useState } from 'react';
import baseurl from '../../baseurl/baseurl';
import { Fragment } from 'react';
import './fileuploader.css';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const Fileupload = () => {

    const [filename,setfilename]=useState('Chose File');
    const [file,setfile]=useState('');

    const {setab_Url}=useContext(ProjectsContext);

    const change = (e) => {
        setfile(e.target.files[0]);
        setfilename(e.target.files[0].name);
    }

    const submit = async (e)=> {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);
    
        try{  
            const res = await baseurl.post('/uploads',formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            });
            const fileUrl=res.data;
            console.log(res.data)
            setab_Url(fileUrl);
        }catch(err){
            console.log(err);
        }
    }   

  return (
    <div className='inputupload'>
        <input type="file" className="customfile" onChange={change}/>
        <button className='upbut' onClick={submit}> <FontAwesomeIcon icon={faUpload}/> Upload</button>
    </div>
  );
}

export default Fileupload;