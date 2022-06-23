//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Project - rmcdmc
//    Component  - HeaderIcons
//    DESCRIPTION - HeaderIcons Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineUser } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BsBell } from 'react-icons/bs'
import { connect } from "react-redux";
import RippleAnimation from './common/RippleAnimation'



function HeaderIcons(props) {

  const rightNavToggle = () => {
    // setnavClose(true)

    if (props.RightNavCloseStatus == false) {
      props.RIGHT_NAV_CLOSE()
    } else {
      props.RIGHT_NAV_OPEN()

    }
    console.log(props.RightNavCloseStatus)
  }
  return (
    <>
      <div className="grid grid-cols-12 place-items-center h-full pr-12">
        <div className='cursor-pointer col-start-1 sm:col-start-9' ><div className='bg-gray-100 p-2 rounded-lg relative'><BsBell color='black' size={16} /><RippleAnimation/></div></div>
        <div className='cursor-pointer ml-8' ><div className='bg-gray-100 p-2 rounded-lg '><AiOutlineUser color='black' size={16} /></div></div>
        <div className='cursor-pointer' onClick={rightNavToggle}><div className='bg-gray-100 p-2 rounded-lg ml-16'><BsThreeDotsVertical color='black' size={16} /></div></div>

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
    RIGHT_NAV_OPEN: (data2) => dispatch({ type: "RIGHT_NAV_OPEN" }),
    RIGHT_NAV_CLOSE: (data3) => dispatch({ type: "RIGHT_NAV_CLOSE" })
  };
};



// export default HeaderIcons
export default connect(mapStateToProps, mapDispatchToProps)(HeaderIcons);
/**
 * Exported to :
 * 1. TopHeaderNav component
 * 
 */