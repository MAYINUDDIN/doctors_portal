
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/about' element={<About />}>Home</Route>
        <Route path='/login' element={<Login />}>Home</Route>
        <Route path='/appointment' element={<Login />}>Home</Route>
      </Routes>
    </div>
  );
}

export default App;
