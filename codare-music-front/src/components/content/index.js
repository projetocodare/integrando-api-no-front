import React from 'react'
import './content.css'
import MainBanner from './main-banner'
import Shelf from './shelf'

const Content = () => {
    return(
        <div id="codare-content">
            <MainBanner/>
            <Shelf/>
        </div>
    )
}

export default Content