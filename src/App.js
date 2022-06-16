import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import PropDetailFull from './Pages/PropDetailFull'
import RightSidebar from './Components/RightSidebar';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import BasicGrid from './Components/BasicGrid';
import OffcanvasTabs from './Components/OffcanvasTabs';
import InputField from './Components/InputField';
import ListItems from './Components/ListItems';

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <BasicGrid/> */}
      <BrowserRouter>
      <Header />
      <Sidebar/>
        <Routes>
          {/* <Route path='/' element={<OffcanvasTabs />} /> */}
          {/* <Route path='/' element={<ListItems />} /> */}
          <Route path='/prop-dtl' element={<PropDetailFull/>} />
        </Routes>
      <RightSidebar />
      </BrowserRouter>
    </>
  );
}

export default App;
