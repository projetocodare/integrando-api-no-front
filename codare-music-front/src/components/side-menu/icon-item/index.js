import React from 'react'
import './icon-item.css'

const IconItem = ({ title, icon }) => {

    const css = {
        backgroundImage: `url('${icon}')`
    }

    return(
        <div className='codare-icon-item'>
            <div className='codare-icon' style={css} />
            <div className='codare-text'>{title}</div>
        </div>
    )
}

export default IconItem