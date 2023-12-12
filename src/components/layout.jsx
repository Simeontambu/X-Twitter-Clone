import React from "react"

import Sidebar from './sidebarLeft';
import SidebarRight from "./sidebarRight";
function Layout({ children }) {
  return (
    <>
    <Sidebar/>
      <div className="left-sidebar" />
      {children}
      <div className="right-sidebar" />
      <SidebarRight/>
    </>
  )
}

export default Layout
