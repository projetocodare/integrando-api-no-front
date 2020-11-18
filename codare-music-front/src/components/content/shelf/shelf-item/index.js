import React, { useEffect, useState } from 'react'
import './shelf-item.css'

const ShelfItem = ({ data }) => {

   

    const [customCover, setCustomCover] = useState(null)

    useEffect(() => {
       
        if(data.image && !customCover){

            let customCss = {
                backgroundImage: `url("${data.image}")`,
                backgroundSize: 'contain'
            }

            setCustomCover(customCss)
        }

    }, [customCover, data.image, setCustomCover])

    return(
        <div className='codare-shelf-item'>
            
            <div className='codare-overlay' title={data.title}>
                <div className='codare-cover' style={customCover}/>
            </div>

            <div className='codare-title' title={data.title}>{data.title}</div>
            
            <div className='codare-subtitle' title={data.description}>{data.description}</div>

        </div>
    )

}

export default ShelfItem