import React, { useState } from 'react'
import SimpleItem from '../simple-item'
import './secondary-title.css'

import { CSSTransition } from 'react-transition-group'

const SecondaryTitle = ({title, items}) => {

    const [titleState, setTitleState] = useState(false)
    
    return(
        <>
        
        <div className='secondary-title' onClick={() => setTitleState(!titleState) }>{title}</div>

        <CSSTransition
            unmountOnExit
            in={titleState}
            timeout={100}
            classNames='items'>
            <div className='item'>{items.map(item => <SimpleItem data={item}/>)}</div>
        </CSSTransition>
        
        </>
    )
}

export default SecondaryTitle