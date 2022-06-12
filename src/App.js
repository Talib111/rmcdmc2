import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import PropDetailFull from './Pages/PropDetailFull'
import RightSidebar from './Components/RightSidebar';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';

function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
      <Header />
      <Sidebar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/prop-dtl' element={<PropDetailFull/>} />
        </Routes>
      <RightSidebar />
      </BrowserRouter>
    </>
  );
}

export default App;
