import React, { useState } from 'react';
import baseurl from '../../baseurl/baseurl';
import { Fragment } from 'react';

const Fileupload = () => {

    const [filename,setfilename]=useState('Chose File');
    const [file,setfile]=useState('');

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
            console.log(fileUrl);
        }catch(err){
            console.log(err);
        }
    }   

  return (
    <Fragment>
        <form className='container mt-4'>
            <div className='custom-file mb-4'>
                <input type="file" className="custom-file-input border border-dark rounded" id="customFile" onChange={change}/>
                <label className="custom-file-label" htmlFor="customFile">{filename}</label>
            </div>
            <input type='submit' value="Upload" className='btn btn-primary bt-block mt-4' onClick={submit}></input>
        </form>
    </Fragment>
  );
}

export default Fileupload;