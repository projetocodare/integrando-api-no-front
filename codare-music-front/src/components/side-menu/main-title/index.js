import React from 'react'
import './main-title.css'

const MainTitle = ({ data }) => {

    const text = data.toUpperCase();

    return(
        <div className='main-title'>{text}</div>
    )
}

export default MainTitle