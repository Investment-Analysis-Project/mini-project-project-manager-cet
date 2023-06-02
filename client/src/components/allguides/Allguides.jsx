import React, { useContext, useEffect } from 'react';
import './allguides.css';
import baseurl from '../../baseurl/baseurl';
import { ProjectsContext } from '../../contextapi.js/projectscontext';

const Allguides = (props) => {

//    const {guides,setGuides}=useContext(ProjectsContext);

//     useEffect(()=>{
//         const fetchData =async()=>{
//         try{
//             const response = await baseurl.get("/guides");
//             setGuides(response.data);
//             console.log(response.data);
//             console.log(guides);
//         }catch(err){
//             console.log(err)
//         }
//     };
//         fetchData();
//   },[]);

//     return(
//     <div className='allguides'>
//         <div className='guidecontainer'>
//             <table className="table table-striped table-dark">

//             <thead>
//                 <tr className='bg-primary'>
//                     <th scope="col">ID</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Skills</th>
//                 </tr>
//             </thead>

//             <tbody>
//             {guides.map((res)=>{
//                 return(
//                 <tr key={res.g_id}>
//                 <td>{res.g_id}</td>
//                 <td>{res.name}</td>
//                 <td>
//                     {(res.areas_of_interest).map((aof,i)=>{
//                         return(
//                             <div key={i}>
//                                 <span>{aof}</span>
//                                 <span>&nbsp;</span>
//                             </div>
//                         )
//                     })}
//                 </td>
//                 </tr>)
//             })}
//             </tbody>

//             </table>
//         </div>
//     </div>
//     )
}

export default Allguides;