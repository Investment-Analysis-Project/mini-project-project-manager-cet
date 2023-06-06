import React, { useState } from 'react';
import { useContext } from 'react';
import { ProjectsContext } from '../../contextapi.js/projectscontext';

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
        <div key={index}>
    
          <select onChange={(e) => handleInputChange(index,e)}>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Blockchain">Blockchain</option>
                <option value="Web App">Web App</option>
          </select>

          <button type="button" onClick={() => handleRemoveInput(index)}>
            Remove
          </button>      
        </div>
      ))}
      <button type="button" onClick={handleAddInput}>
        Add Field
      </button>
    </>
  );
};

export default DynamicForm;
