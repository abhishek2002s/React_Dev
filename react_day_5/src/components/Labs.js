import React from 'react'
import { useNavigate } from 'react-router-dom';

const Labs = () => {
    const navigate = useNavigate();

    function clickHandler(){
        navigate('/');
    }

    function backHandler(){
        navigate(-1);
    }
  return (
    <div>
    <div>Labs</div>
<button onClick={clickHandler}>Move to home page</button>
<button onClick={backHandler}>Go Back</button>
    </div>
  )
}

export default Labs