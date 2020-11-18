import React from 'react';
import Content from '../content';
import Sidebar from '../sidebar';
import './body.css'

const Body = () => {

    return(
        <div id="codare-body">
            <Sidebar/>
            <Content/>
        </div>
    )

}

export default Body