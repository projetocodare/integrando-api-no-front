import React from 'react'
import MainTitle from './main-title'
import SecondaryTitle from './secondary-title'
import './side-menu.css'
import SimpleItem from './simple-item'

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

    return(
        <div id="codare-menu">
            <MainTitle data='explorar'/>
            <MainTitle data='recentes'/>
            
                <SimpleItem data='Reproduzidas'/>
                <SimpleItem data='Adicionadas'/>

                <SecondaryTitle title='Artistas' items={genders}/>
                <SecondaryTitle title='Gêneros' items={genders}/>

        </div>
    )
}

export default SideMenu