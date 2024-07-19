import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate();

    function clickHandler(){
        navigate('/');
    }
  return (
    <div>
    <div>Notfound</div>
<button onClick={clickHandler}>Move to Home page</button>
    </div>
  )
}

export default Notfound