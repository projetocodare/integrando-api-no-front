import React from 'react'
import ShelfItem from './shelf-item'
import './shelf.css'

const Shelf = () => {

    return(
        <>
        <div className='codare-shelf'>
            <div className="title">Playlists</div>
            <div className="title">Recomendadas</div>
            <div className="subtitle">Com base no que escutou nos ultimos dias</div>
        </div>

        <div className='codare-shelf-items'>
            <ShelfItem/>
            <ShelfItem/>
            <ShelfItem/>
            <ShelfItem/>
            <ShelfItem/>
        </div>

        </>
    )

}

export default Shelf