import React from 'react'
import { Link } from 'wouter'
import Icon from '../icon'

import './feature.css'

export default function Feauter({ type }) {
    return (
        <div className="feature">
            < Icon type={type}/>
            <div className="feature__info">
                <p className="feature__title">Inglés</p>
                <p className="feature__description">Lorem ipsum dolor amet, consectetur
                    adipiscing elit. Mattis et sed nam sem tellus erat.</p>
            </div>
            <Link to="" className="feature__button">
                Explore <i className="fas fa-arrow-right feature__button-icon"></i>
            </Link>
        </div>
    )
}
