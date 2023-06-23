import React, { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import './similarity.css';
import { useState } from 'react';
import axios from 'axios';

const Similarity = () => {

    const [filename,setfilename]=useState('No File');
    const [file,setfile]=useState('');
    const [similarpro,setsimilarpro]=useState('');

    const change = (e) => {
        setfile(e.target.files[0]);
        setfilename(e.target.files[0].name);
    }

    const search = async(e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file',file);
        
        try{
            const resp = await axios.post('http://localhost:5000/predict/pdf',formData,{
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
            setsimilarpro(resp.data);
            console.log(resp.data);
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
                        <span className='simpr_title'>MEDICAL IMAGE ENCRYPTION USING PERMUTATION AND CHAOTIC MAPS</span>
                        <span className='simpr_program'>Mtech</span>
                        <span className='simpr_year'>2022</span>
                    </div>
                </div>
            </div>
        </Layout>     
    )
}

export default Similarity;