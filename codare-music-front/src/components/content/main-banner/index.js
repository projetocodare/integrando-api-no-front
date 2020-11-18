import React from 'react'
import './main-banner.css'

const MainBanner = ({ data }) => {

    let firstPart = '...'
    let rest = '...'

    if(data){
        try {
         let titleArray = data.title.split(' ')
         firstPart = titleArray[0]
         delete titleArray[0]
         rest = titleArray.join(' ')
        } catch (error) {
          firstPart = data.title
        }
     }

    const goToUrl = () => {
        window.open(data.buttonUrl, '_blank')
    }

    return(
        <div id="codare-main-banner">
            <div id='codare-main-text'>
                <div className='codare-featured-playlist'>{firstPart}</div>
                <div className='codare-featured-playlist'>{rest}</div>
                <div className='codare-featured-playlist-description'>{data ? data.description : '...'}</div>

                <div 
                id='codare-featured-button' 
                title={(data) && `Acesar a Playlist ${data.title}`} 
                className={`${!data ? 'disabled' : ''}`} 
                onClick={ () => goToUrl() } >
                    Ouça mais
                </div>

            </div>
        </div>
    )
    
}

export default MainBanner