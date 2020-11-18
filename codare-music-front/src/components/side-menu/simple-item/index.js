import React from 'react'
import './simple-item.css'

const SimpleItem = ({ data }) => {
    return(
        <div className='simple-item'>{data}</div>
    )
}

export default SimpleItem