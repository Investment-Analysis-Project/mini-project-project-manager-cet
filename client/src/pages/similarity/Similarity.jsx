import React, { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import './similarity.css';
import { useState } from 'react';
import axios from 'axios';

const Similarity = () => {

    const [filename,setfilename]=useState('No File');
    const [file,setfile]=useState('');

    const change = (e) => {
        setfile(e.target.files[0]);
        setfilename(e.target.files[0].name);
    }

    const search = async(e) => {
        try{
            const resp = await axios.get('http://localhost:5000/test');
            console.log(resp.data);
        }catch(err){
            console.log(err);
        }
    }

    return(
        <Layout>
            <div className='similarity'>
                <div className='drop_box'>
                    <h3>Search Similar Projects</h3>
                    <input type="file" name="myFile" className="drop-zone__input" onChange={change}/>
                    <button onClick={search}>Search</button>
                </div>
            </div>
        </Layout>     
    )
}

export default Similarity;