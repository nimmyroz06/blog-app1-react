import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { BrowserRouter, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Router>
      <Routes path='/' element={<SignIn/>}/>
      <Routes path='/signup' element={<SignUp/>}/>
    </Router>
    </BrowserRouter>
  );
}

export default App;
