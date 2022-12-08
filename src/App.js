
import Home from "./components/Home";
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';

import './App.css';
import Navbar from "./components/Navbar";
import Works from "./components/Works";


function App() {
  return (
    <>
    <Router>
       <Navbar/>
       <Routes>
           
        <Route exact path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/work' element={<Works/>}/>


       {/* <Home/>
       <Works/> */}
       </Routes>
    </Router>
    </>
    
  );
}

export default App;
