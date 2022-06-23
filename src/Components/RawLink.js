//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Project - rmcdmc
//    Component  - RawLink
//    DESCRIPTION - RawLink Component
//////////////////////////////////////////////////////////////////////////////////////

import { Link, NavLink } from 'react-router-dom'

function RawLink(props) {
  const checqueActive = ()=>{
    console.log(props.title,' is active')
  }
  return (
    <>
      {/* <Link to={props.path}>{props.title}</Link> */}
      {/* <NavLink to={{ pathname: props.path }} activeStyle={{'color':'red',backgroundColor:'blue'}}>{props.title}</NavLink> */}
      <NavLink to={{ pathname: props.path }} className={isActive =>
    "bg-red-700" + (!isActive ? " bg-red-700" : "")
  }><li style={{ 'textDecoration': 'none', 'fontSize': '13px', 'fontWeight': '400', 'paddingLeft': '10px' }} href={props.path}>{props.title}</li></NavLink>

    </>
  )
}

export default RawLink
/**
 * Exported to :
 * 1. SidebarLink Component
 */