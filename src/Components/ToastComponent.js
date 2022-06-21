import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  function ToastComponent(){
    const notify = () => toast("Wow so easy!");

    return (
      <div>
        <button className='bg-indigo-600 rounded text-white shadow-lg p-3' onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }

export default ToastComponent