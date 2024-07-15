
import { useEffect, useState } from 'react';
import './App.css'
function App() {

const[text,setText] = useState('');
const[name,setName] = useState('love');

// //varaition1*********** -> every render
// useEffect( () => {
//      console.log("UI Rendering Done");
// });


//varation 2*********** -> First render
// useEffect( () => {
//   console.log("UI rendering done");
// },[]);


// //varation 3************** -> on first render + whenever de pendency changes
// useEffect( () => {
//   console.log("Change observed");
// },[name]);

//varation 4***************** -> handling anamounting of a component (matlab nye listner add se krne se phle purana wala listenre remove krdo)
useEffect( () => {
  console.log("Listener Added");

  return() => {
    console.log("Listerner removed");
  }
},[text]);

function changeHandler(event){
  setText(event.target.value);
  console.log(text);
}

  return (
    <div className="App">
<input type='text' onChange={changeHandler}></input>
    </div>
  );

}

export default App;
