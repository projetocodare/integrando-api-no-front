import React, { useEffect, useState } from 'react'
import IconItem from './icon-item'
import MainTitle from './main-title'
import SecondaryTitle from './secondary-title'
import './side-menu.css'
import SimpleItem from './simple-item'

import HouseIcon from '../../assets/icons/house-icon.svg'
import SoundIcon from '../../assets/icons/sound-icon.svg'
import PlayIcon from '../../assets/icons/play-icon.svg'
import IndexUseCase from '../../pages/index/use-cases/index.use-case'

const SideMenu = () => {

    const indexUseCase = IndexUseCase

    const[sidebarData, setSidebarData] = useState(null)

    const explore = [
        { text: 'Ínicio', icon: HouseIcon },
        { text: 'Estações', icon: SoundIcon },
        { text: 'Playlists', icon: PlayIcon }
    ]

    useEffect(() => {

        if(!sidebarData) { 
            indexUseCase.loadSideBar().then((data) => {
                setSidebarData(data)
            })
        }

    })

    return(
        <div id="codare-menu">
            <MainTitle data='explorar'/>
                {explore.map(ex => <IconItem key={ex.text} title={ex.text} icon={ex.icon} />)}

            <MainTitle data='recentes'/>
            
                <SimpleItem data='Reproduzidas'/>
                <SimpleItem data='Adicionadas'/>

                <SecondaryTitle title='Artistas' items={(sidebarData) ? sidebarData.artists : []}/>
                <SecondaryTitle title='Gêneros' items={(sidebarData) ? sidebarData.genders : []}/>

        </div>
    )
}

export default SideMenu