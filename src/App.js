import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About';
import Navbar from './components/Home/Navbar';
import Appointment from './components/Appointment';
import Review from './components/Home/Review';
import Login from './components/Login/Login';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='review' element={<Review/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='appointment' element={<Appointment/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
