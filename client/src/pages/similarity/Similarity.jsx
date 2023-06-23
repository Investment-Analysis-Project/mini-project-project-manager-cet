import React, { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import './similarity.css';
import { useState } from 'react';
import axios from 'axios';

const Similarity = () => {

    const [filename,setfilename]=useState('No File');
    const [file,setfile]=useState('');
    const [title,settitle]=useState("");

    const change = (e) => {
        setfile(e.target.files[0]);
        setfilename(e.target.files[0].name);
    }

    const search = async(e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file',file);
        
        try{
            const resp = await axios.post('https://abstract-check-api.onrender.com/predict/pdf',formData,{
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
            });

            for (const [key, project] of Object.entries(resp.data)) {
                console.log(`Project ${key}:`);
                console.log(project.Abstract); 
                console.log(project.Domain); 
                settitle(project.Domain);
                console.log("------------------");
            }
        }catch(err){
            console.log(err);
        }
    }

    return(
        <Layout>
            <div className='similarity'>
                <div className='drop_box'>
                    <h1>Search Similar Projects</h1>
                    <label>Upload Abstract here</label>
                    <input type="file" name="myFile" className="drop-zone__input" onChange={change}/>
                    <button onClick={search} className='logbut'>Search</button>
                </div>
                <div className='pro_box'>
                    <h2>Similar Projects Found</h2>

                    <div className='simpro'>
                        <span className='simpr_title'>{title}</span>
                        <span className='simpr_program'>Mtech</span>
                        <span className='simpr_year'>2022</span>
                    </div>
                </div>
            </div>
        </Layout>     
    )
}

export default Similarity;