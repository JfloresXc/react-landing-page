import React from 'react'
import Feauter from '../feature'
import { ButtonLink } from '../button'

import './features.css'

export default function Features() {
    return (
        <div className="features">
            <p className="features__title">Nuestros idiomas y métodos</p>
            <ul className="features_list">
                <li><Feauter type="subject" /></li>
                <li><Feauter type="subject" /></li>
                <li><Feauter type="subject" /></li>
                <li><Feauter type="trait" /></li>
                <li><Feauter type="trait" /></li>
                <li><Feauter type="trait" /></li>
            </ul>
            <div className="features__button">
                <ButtonLink
                    message={`Explore all`}
                    icon={true}
                ></ButtonLink>
            </div>
        </div>
    )
}
