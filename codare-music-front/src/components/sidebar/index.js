import React from 'react'
import SideMenu from '../side-menu'
import './sidebar.css'

const Sidebar = ({ data }) => {
    return(
        <div id="codare-sidebar">
            <SideMenu data={data}/>
        </div>
    )
}

export default Sidebar