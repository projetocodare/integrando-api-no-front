import React from 'react'
import './main-title.css'

const MainTitle = ({ data }) => {

    const text = data.toUpperCase();

    return(
        <div className='codare-main-title'>{text}</div>
    )
}

export default MainTitle