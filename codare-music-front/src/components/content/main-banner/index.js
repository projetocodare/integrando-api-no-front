import React, { useEffect, useState } from 'react'
import IndexUseCase from '../../../pages/index/use-cases/index.use-case'
import './main-banner.css'

const MainBanner = () => {

    const indexUseCase = IndexUseCase

    const[mainBannerData, setMainBannerData] = useState(null)

    useEffect(()=>{
        if(!mainBannerData) { 
            indexUseCase.loadMainBanner().then((data) => {
                setMainBannerData(data)
            })
         }
    })

    let firstPart = '...'
    let rest = '...'
    
    if(mainBannerData){
        try {
         let titleArray = mainBannerData.title.split(' ')
         firstPart = titleArray[0]
         delete titleArray[0]
         rest = titleArray.join(' ')
        } catch (error) {
          firstPart = mainBannerData.title
        }
     }

    const goToUrl = () => {
        window.open(mainBannerData.buttonUrl, '_blank')
    }

    return(
        <div id="codare-main-banner">
            <div id='codare-main-text'>
                <div className='codare-featured-playlist'>{firstPart}</div>
                <div className='codare-featured-playlist'>{rest}</div>
                <div className='codare-featured-playlist-description'>{mainBannerData ? mainBannerData.description : '...'}</div>

                <div 
                id='codare-featured-button' 
                title={(mainBannerData) && `Acesar a Playlist ${mainBannerData.title}`} 
                className={`${!mainBannerData ? 'disabled' : ''}`} 
                onClick={ () => goToUrl() } >
                    Ouça mais
                </div>

            </div>
        </div>
    )
    
}

export default MainBanner