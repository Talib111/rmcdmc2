//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Date - 
//    Version - 1.0
//    Revison - 1
//    Project - rmcdmc
//    Component  - Sidebar
//    DESCRIPTION - This is toggle sidebar component which contains following components:
                    // 1. imageCard 
                    // 2. SidebarLink 
//////////////////////////////////////////////////////////////////////////////////////
import React, { useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import ImageCard from './ImageCard';
import SidebarLink from './SidebarLink';
import { connect } from "react-redux";
import Sidebar2 from './Sidebar2';
import CollapseItem from './CollapseItem';
import CollapseItem2 from '../CollapseItem2';
import RawLink from './RawLink';
import {FaEnvelope} from 'react-icons/fa'


function Sidebar(props) {

  const [navCloseStatus, setnavCloseStatus] = useState('')
  const [menuPermission, setMenuPermission] = useState([
    { id: 1, menuName: 'Home', menuPath: '/' },
    { id: 2, menuName: 'Dashboard', menuPath: '/dashboard' },
    { id: 3, menuName: 'PropDetails', menuPath: '/prop-dtl' },
    { id: 4, menuName: 'Master', menuPath: '/master' },
    { id: 5, menuName: 'Document', menuPath: '/doc-view' },
    { id: 6, menuName: 'Profile', menuPath: '/profile' },
    { id: 7, menuName: 'Saf Search', menuPath: '/saf-search' },
    { id: 7, menuName: 'Deactivate', menuPath: '/deactivate' }
  ])
  useEffect(() => {
    setnavCloseStatus(props.navCloseStatus)

  }, [props.navCloseStatus])

  const expandSidebar = () => {
    if (props.navOriginalCloseStatus == true) {
      props.NAV_OPEN()
    }
  }
  const contractSidebar = () => {
    if (props.navOriginalCloseStatus == true) {
      props.NAV_CLOSE()
    }
  }

  return (
    <>
      <div className=" shadow-lg px-0 bg-white h-full pb-12 overflow-hidden absolute top-16 left-0  text-gray-700 transition-all z-50 border-r-2" style={navCloseStatus == true ? { 'width': '34px', 'paddingRight': '0' } : { 'width': '250px', 'paddingRight': '2px' }} onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
        {/* <div className=" shadow-lg px-0 bg-white h-full pb-12 overflow-hidden absolute top-16 left-0  text-gray-700" style={navCloseStatus == true ? { 'width': '34px', 'paddingRight': '0', 'transition': '0.4s','zIndex':'1000' } : { 'width': '250px', 'paddingRight': '2px', 'transition': '0.4s','zIndex':'1000'}} onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}> */}
        <div className='py-4' >
          <ImageCard sideBarStatus={navCloseStatus} />
        </div>
        <ul className="list-none" style={navCloseStatus == true ? { 'padding': '0px 2px 0px 2px' } : { 'padding': '0px 10px 0px 10px' }}>
          {/* <CollapseItem2 title="Home" path="/" /> */}
          {/* <SidebarLink title="Home" path="/" />
                   <SidebarLink title="Dashboard" path="/dashboard" />
                   <SidebarLink title="PropDetails" path="/prop-dtl" />
                   <SidebarLink title="Master" path="/master" />
                   <SidebarLink title="Document" path="/doc-view" />
                   <SidebarLink title="Profile" path="/profile" />
                   <SidebarLink title="Saf Search" path="/saf-search" /> */}
          <li className='flex items-center pl-2 py-2 mt-2 bg-sky-100 border-l-2 border-indigo-600 text-blue-500 hover:bg-sky-100 hover:border-l-2 hover:border-indigo-600  hover:text-blue-500' style={{ 'width': '250px' }}>
            <div className="flex-none ">
              <FaEnvelope size={14} />
            </div>
            <div className="flex-initial w-40">
              <RawLink path="/settings" title="Settings" />
            </div>
          </li>
          {
            menuPermission.map((data, index) => (
              <SidebarLink title={data.menuName} path={data.menuPath} >
                </SidebarLink>
            ))
          }
          {/* {
                     menuPermission.map((data,index)=>(
                       <CollapseItem2 title={data.menuName} path={data.menuPath}/>
                     ))
                   } */}




        </ul>
      </div>
    </>
  )
}

//for redux
const mapStateToProps = (state) => {
  return {
    navCloseStatus: state.navCloseStatus,
    navOriginalCloseStatus: state.navOriginalCloseStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // buyCake: () => dispatch(buyCake())
    NAV_OPEN: (data2) => dispatch({ type: "NAV_OPEN" }),
    NAV_CLOSE: (data3) => dispatch({ type: "NAV_CLOSE" })
  };
};
// export default Home // EXPORTING HOME COMPONENT
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

/**
 * Exported to :
 * 1. App.js
 * 
 */