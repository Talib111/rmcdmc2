//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Date -   10 june 2022
//    Version - 1.0
//    Revison - 1
//    Project - rmcdmc
//    Component  - RightSidebar
//    DESCRIPTION - This is RightSidebar component.
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import {BsChat} from 'react-icons/bs'
import {TbAlertCircle} from 'react-icons/tb'
import {FaWrench} from 'react-icons/fa'
import { connect } from "react-redux";
import OffcanvasTabs from './OffcanvasTabs';


function RightSidebar(props) {
    return (
        <>
            <div className="shadow-2xl px-0 bg-white h-full overflow-hidden absolute top-16 right-0" style={props.RightNavCloseStatus==false?{'width':'300px','transition':'0.4s'}:{'width':'0','transition':'0.4s'}}>
             <div className="w-full pt-4 h-full">
                 {/* <div className='flex justify-center border-b-2 border-indigo-200'><BsChat color="gray"/></div>
                 <div className='flex justify-center'><TbAlertCircle color="gray"/><span className='text-xs text-gray-400 pl-2'>Report</span></div>
                 <div className='flex justify-center'><FaWrench color="gray"/><span className='text-xs text-gray-400 pl-2 pr-2'>Settings</span></div> */}
                 <OffcanvasTabs/>
             </div>
            </div>
        </>
    )
}

//for redux
const mapStateToProps = (state) => {
    return {
        RightNavCloseStatus: state.RightNavCloseStatus
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      // buyCake: () => dispatch(buyCake())
      RIGHT_NAV_OPEN: (data2) => dispatch({ type: "RIGHT_NAV_OPEN"}),
      RIGHT_NAV_CLOSE: (data3) => dispatch({ type: "RIGHT_NAV_CLOSE" })
    };
  };


// export default RightSidebar
export default connect(mapStateToProps, mapDispatchToProps)(RightSidebar);
/**
 * Exported to :
 * 1. App.js
 * 
 */