import { useState, version } from 'react';
import './App.css';

function App() {


//   const[firstName, setFirstName] = useState("");
//   const[lastName, setLastName] = useState("");

//  console.log(firstName);
//  console.log(lastName);

//   function changeFirstnameHandler(event){
//     // console.log("First name is :");
//     setFirstName(event.target.value);

//   }
//   function changeLastnameHandler(event){
//     // console.log("last name is")
//     setLastName(event.target.value);

//   }



//create an object of hookm state
const [formData, setFormData] = useState(
  {firstName: "", lastName: "", email:"", comments:"", isVisible:true, mode:"",favCar:""}
);

console.log(formData);
// console.log(formData.email);

function changeHandler(event){
 const {name,value,checked,type} =  event.target
  setFormData(prevFormData => {
    return {
      ...prevFormData,
      [name] : type ==  "checkbox" ? checked : value
      
    }
  });
}


function submitHandler(event){
  event.preventDefault();
  //print
  console.log("Finaaly priniting the enitire form of data");
  console.log(formData);
}


  return (
    <div className="flex justify-center items-center flex-col h-[100vh]">
  

       <form onSubmit={submitHandler}>
        <input type="text" 
        placeholder='first name'
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName}
          />
      <br/>

      <br/>
        <input type="text" 
        placeholder='last name'
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName}
          />

      <br/>
        <input type="email" 
        placeholder='emial'
          onChange={changeHandler}
          name='email'
          value={formData.email}
          />
      <br></br>
      <br></br>
      <textarea placeholder='enter your comments' onChange={changeHandler} name='comments'
      value={formData.comments}></textarea>

      <br></br>
      <br/>

      <input type='checkbox' onChange={changeHandler}
      id='isVisible'
      name='isVisible'
      checked={formData.isVisible}
      ></input>

      
      <label htmlFor='isVisible'>Am i Visible?</label>

      <br></br>
      <br></br>

        <fieldset>
          <legend>mode:</legend>
          <input 
      type="radio"
      onChange={changeHandler}
      name='mode'
      value="online-Mode"
      id='online-Mode'
      checked={formData.mode === "online-Mode"}
      />
      <label htmlFor='online-Mode'>Online Mode</label>

      <input 
      type="radio"
      onChange={changeHandler}
      name='mode'
      value="offline-Mode"
      id='offline-Mode'
      checked={formData.mode === "offline-Mode"}
      />
      <label htmlFor='offline Mode'>Offline Mode</label>

      <br></br>
      <br></br>
        </fieldset>



      <label htmlFor='favCar'>Tell me your favCar</label>
<select 
  name="favCar"
  onChange = {changeHandler}
  id='favCar'
  value={formData.favCar}
  >
  
  <option value="scorpio">Scorpio</option>
  <option value="futuner">furtuner</option>
  <option value="thar">thar</option>
  <option value="defender">Defender</option>
</select>


<br></br>
<br></br>

{/* <input type='submit' value="submit"></input> */}

<button>Submit</button>
      
       </form>
    </div>
  );
}

export default App;
