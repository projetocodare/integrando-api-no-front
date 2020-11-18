import React from 'react'
import './footer.css'
import config from '../../core/config'

const Footer = () => {

    return(
        <div id="codare-footer">
            © {config.currentYear} - Codare Music | Desenvolvimento: Codare
        </div>
    )

}

export default Footer