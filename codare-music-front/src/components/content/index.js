import React, { useEffect, useState } from 'react'
import IndexUseCase from '../../pages/index/use-cases/index.use-case'
import './content.css'
import MainBanner from './main-banner'
import Shelf from './shelf'

const Content = () => {
    
    const indexUseCase = IndexUseCase

    const[playlistData, setPlaylistData] = useState(null)

    useEffect(()=>{
        if(!playlistData) { 
            indexUseCase.loadPlaylists().then((data) => {
                setPlaylistData(data)
            })
         }
    })

    return(
        <div id="codare-content">
            <MainBanner />
            {playlistData && playlistData.map(sh => <Shelf key={sh.title} props={sh}/>)}
        </div>
    )
}

export default Content