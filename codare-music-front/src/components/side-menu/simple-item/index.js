import React from 'react'
import './simple-item.css'

const SimpleItem = ({ data }) => {
    return(
        <div title={data} className='codare-simple-item'>{data}</div>
    )
}

export default SimpleItem