import React from 'react'
import IconItem from './icon-item'
import MainTitle from './main-title'
import SecondaryTitle from './secondary-title'
import './side-menu.css'
import SimpleItem from './simple-item'

import HouseIcon from '../../assets/icons/house-icon.svg'
import SoundIcon from '../../assets/icons/sound-icon.svg'
import PlayIcon from '../../assets/icons/play-icon.svg'

const SideMenu = () => {

    const genders = [
        'Adulto Contemporâneo',
        'British Invasion',
        'Dance Pop',
        'Pop',
        'Rock',
        'Rock Alternativo',
        'Rock Clássico',
        'Rock Pop',
        'Rock de Arena'
    ]

    const explore = [
        { text: 'Ínicio', icon: HouseIcon },
        { text: 'Estações', icon: SoundIcon },
        { text: 'Playlists', icon: PlayIcon }
    ]

    return(
        <div id="codare-menu">
            <MainTitle data='explorar'/>
                {explore.map(ex => <IconItem title={ex.text} icon={ex.icon} />)}

            <MainTitle data='recentes'/>
            
                <SimpleItem data='Reproduzidas'/>
                <SimpleItem data='Adicionadas'/>

                <SecondaryTitle title='Artistas' items={genders}/>
                <SecondaryTitle title='Gêneros' items={genders}/>

        </div>
    )
}

export default SideMenu