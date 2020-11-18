import React from 'react'
import './main-banner.css'

const MainBanner = () => {

    return(
        <div id="codare-main-banner">
            <div id='codare-main-text'>
                <div className='codare-featured-playlist'>FEATURED</div>
                <div className='codare-featured-playlist'>OVERPLAYED</div>
                <div className='codare-featured-playlist-description'>As melhores músicas em uma playlist só</div>
                <div id='codare-featured-button'>Ouça mais</div>
            </div>
        </div>
    )
    
}

export default MainBanner