import React, { useState } from 'react'
import SimpleItem from '../simple-item'
import './secondary-title.css'

import { CSSTransition } from 'react-transition-group'

const SecondaryTitle = ({title, items}) => {

    const [titleState, setTitleState] = useState(false)

    return(
        <>
        
        <div className='secondary-title' onClick={() => setTitleState(!titleState) }>
            <div className='text'>{title}</div>
            <div className={`arrow ${titleState && 'opened'}`}/>
        </div>

        <CSSTransition
            unmountOnExit
            in={titleState}
            timeout={100}
            classNames='items'>
            
            {items 
                ? 
                <div className='item'>{items.map(item => <SimpleItem data={item}/>)}</div>
                :
                <div className='item'><SimpleItem data={'Vazio'}/></div>
            }
        </CSSTransition>
        
        </>
    )
}

export default SecondaryTitle