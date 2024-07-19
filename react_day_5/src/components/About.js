import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate();
function clickHandler(){
      //move to about page
      navigate('/labs');
}
function backHandler(){
    navigate(-1);
}


  return (
    <div>

    <div>About</div>
    <button onClick={clickHandler}>Move to labs page</button>
    <button onClick={backHandler}>Go Back</button>
    </div>
  )
}

export default About