import React from "react"

import Sidebar from './sidebarLeft';
import SidebarRight from "./sidebarRight";
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
