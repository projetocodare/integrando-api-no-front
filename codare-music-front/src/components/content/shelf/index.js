import React from 'react'
import ShelfItem from './shelf-item'
import './shelf.css'

import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const Shelf = ({ props }) => {

    const shelfName = props.title.split(' ')
    const firstName = shelfName[0]
    delete shelfName[0]
    const rest = shelfName.join(' ')

    return(
        <div className='codare-shelf-container'>
        
            <div className='codare-shelf'>
                <div className="title">{firstName}</div>
                <div className="title">{rest}</div>
                <div className="subtitle">{props.description}</div>
            </div>

            <div className='codare-shelf-items'>

            <Carousel
                itemWidth={300}
                breakpoints={true}
                draggable={true}
                children={props.items.map(item => <ShelfItem data={item} key={item}/>)}
                plugins={[
                    'infinite',
                    'arrows',
                ]}
                />

            </div>

        </div>
    )

}

export default Shelf