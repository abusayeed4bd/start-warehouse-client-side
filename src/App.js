import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFouond from './pages/NotFound/NotFouond';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="text-danger">this is from app.js </h1>
      <button className='btn btn-danger'>click here</button>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<NotFouond></NotFouond>}></Route>
      </Routes>
    </div>
  );
}

export default App;
