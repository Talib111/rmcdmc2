import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import PropDetailFull from './Pages/PropDetailFull'

function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/prop-dtl' element={<PropDetailFull/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
