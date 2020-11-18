import React, { useState } from 'react'
import SimpleItem from '../simple-item'
import './secondary-title.css'

import { CSSTransition } from 'react-transition-group'

const SecondaryTitle = ({title, items}) => {

    const [titleState, setTitleState] = useState(false)

    return(
        <>
        
        <div className='codare-secondary-title' onClick={() => setTitleState(!titleState) }>
            <div className='codare-text'>{title}</div>
            <div className={`codare-arrow ${titleState && 'opened'}`}/>
        </div>

        <CSSTransition
            unmountOnExit
            in={titleState}
            timeout={100}
            classNames='codare-items'>
            
            {items 
                ? 
                <div className='codare-item'>{items.map(item => <SimpleItem data={item}/>)}</div>
                :
                <div className='codare-item'><SimpleItem data={'Vazio'}/></div>
            }
        </CSSTransition>
        
        </>
    )
}

export default SecondaryTitle