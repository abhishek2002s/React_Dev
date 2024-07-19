import './App.css';
import { NavLink, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Support from './components/Support';
import Notfound from './components/Notfound';
import Home from './components/Home';
import About from './components/About';
import Labs from './components/Labs';
import { Link } from 'react-router-dom';
import Mainheader from './components/Mainheader'

function App() { 
  return (
    <div className="App">

<nav>
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/support">Support</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/labs">Labs</NavLink>
    </li>
  </ul>
</nav>



         {/* <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/support" element={<Support></Support>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/labs" element={<Labs></Labs>}></Route>
          <Route path="*" element={<Notfound></Notfound>}></Route>
         </Routes> */}

         {/* nested routing  **********/}
         <Routes>
          <Route path="/" element={<Mainheader/>}>
          {/* default rotw */}
          <Route index element={<Home/>}/>
          <Route path="/support" element={<Support></Support>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/labs" element={<Labs></Labs>}></Route>
          <Route path="*" element={<Notfound></Notfound>}></Route>
          </Route>
         </Routes>
    </div>
  );
}

export default App;
