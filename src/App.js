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
import CollapseItem from './Components/CollapseItem';
import ChartTest from './Components/ChartTest';
import DataGrid2 from './Components/DataGrid2';
import Dashboard from './Pages/Dashboard';
import TableData from './Components/TableData';

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <BasicGrid/> */}
      <BrowserRouter>
        <Header />
        <Sidebar />
        <div className="sm:w-full md:w-4/5 sm:ml-0 md:ml-64 mt-2">
          <Routes>
            <Route path='/' element={<DataGrid2 />} />
            <Route path='/prop-dtl' element={<PropDetailFull />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/master' element={<DataGrid2 />} />
          </Routes>
        </div>
        <RightSidebar />
      </BrowserRouter>
    </>
  );
}

export default App;
