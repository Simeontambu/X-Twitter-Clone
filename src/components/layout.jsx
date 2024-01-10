import React from "react"

import Sidebar from './sidebarleft/sidebarLeft';
import SidebarRight from "./sidebarright/sidebarRight";
function Layout({ children }) {
  return (
    <>
    
      <div className="left-sidebar" />
      <Sidebar/>
      {children}
      <SidebarRight/>
      <div className="right-sidebar" />
      
     
    </>
  )
}

export default Layout
