import React from 'react'
import './content.css'
import MainBanner from './main-banner'
import Shelf from './shelf'

const Content = ({ banner }) => {

    const shelfs = [
        {
            title: 'Playlists Recomendadas',
            description: 'Com base no que escutou nos ultimos dias',
            items: [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]
        },
        {
            title: 'Tocadas recentemente',
            description: 'Com base no que escutou nos ultimos dias',
            items: [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]
        }
    ]

    return(
        <div id="codare-content">
            <MainBanner data={banner} />
            {shelfs.map(sh => <Shelf key={sh.title} props={sh}/>)}
        </div>
    )
}

export default Content