import React, { useContext, useState } from 'react';
import baseurl from '../../baseurl/baseurl';
import { Fragment } from 'react';
import './fileuploader.css';
import { ProjectsContext } from '../../contextapi.js/projectscontext';

const Fileupload = () => {

    const [filename,setfilename]=useState('Chose File');
    const [file,setfile]=useState('');

    const {setUrl}=useContext(ProjectsContext);

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
            setUrl(fileUrl);
        }catch(err){
            console.log(err);
        }
    }   

  return (
    <div className='inputupload'>
        <input type="file" className="customfile" onChange={change}/>
        <label className="filelabel" htmlFor="customFile">{filename}</label>
        <button className='upbut' onClick={submit}>Upload Abstract</button>
    </div>
  );
}

export default Fileupload;