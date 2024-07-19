import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    function clickHandler(){
        navigate('/support');
    }
  return (
    <div>
    <div>
    <div>This is my HomePage</div>
<button onClick={clickHandler}>Move to support page</button>
    </div>

    </div>
  )
}

export default Home