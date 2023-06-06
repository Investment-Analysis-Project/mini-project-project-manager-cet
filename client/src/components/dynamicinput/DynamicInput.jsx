import React, { useState } from 'react';
import { useContext } from 'react';
import { ProjectsContext } from '../../contextapi.js/projectscontext';
import './dynamicinput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const DynamicForm = () => {
  const {inputs,setInputs}=useContext(ProjectsContext);

  const handleInputChange = (index,e) => {
    const newInputs = [...inputs];
    newInputs[index] = e.target.value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs,'Machine Learning']);
  };

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  return (
    <>
      {inputs.map((input, index) => (
        <div className='dynamicinput' key={index}>
    
          <select className='selectinput' onChange={(e) => handleInputChange(index,e)}>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Blockchain">Blockchain</option>
                <option value="Web App">Web App</option>
          </select>

          <button className='rembutdyn' type="button" onClick={() => handleRemoveInput(index)}><FontAwesomeIcon icon={faMinus}/> Remove</button>      
        </div>
      ))}
      <button className='selectbut' type="button" onClick={handleAddInput}><FontAwesomeIcon icon={faPlus}/> Add</button>
    </>
  );
};

export default DynamicForm;
