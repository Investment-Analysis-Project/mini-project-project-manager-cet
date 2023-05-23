import baseurl from './baseurl/baseurl';
import Fileupload from './component/Fileupload';

function App() {
  return (
    <div className='container mt-4'>
      <h4 className='display-4 text-center mb-4'>
        <i className='fab fa-react'/>React File Upload
      </h4>
      <Fileupload/>
    </div>
  );
}

export default App;