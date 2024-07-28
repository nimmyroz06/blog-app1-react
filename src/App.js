import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignIn from './components/CreatePost';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <BrowserRouter>
    <Router>
      <Routes path='/' element={<SignIn/>}/>
      <Routes path='/signup' element={<SignUp/>}/>
      <Routes path='/create' element={<CreatePost/>}/>
    </Router>
    </BrowserRouter>
  );
}

export default App;
