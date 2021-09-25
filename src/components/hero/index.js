import React from 'react'
import { ButtonLink } from '../button'
import user1 from '../../storage/user1.png'
import user2 from '../../storage/user2.png'
import user3 from '../../storage/user3.png'
import user4 from '../../storage/user4.png'

import './hero.css'

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero__heading">
                <p className="hero__title">Centro Idiomas</p>
                <p className="hero__description">
                    Impartimos cursos de inglés, portugués y francés en los niveles básico, intermedio y avanzado, en los sistemas regular e intensivo.
                </p>
                <ButtonLink type="purple" message="Nosotros" />
            </div>
            <div className="hero__panel-dark">
                <div className="hero__panel-dark-sub">
                    <img src={user1} alt="user 1" className="hero__image hero__image-user1" />
                    <img src={user2} alt="user 2" className="hero__image hero__image-user2" />
                    <img src={user3} alt="user 3" className="hero__image hero__image-user3" />
                    <img src={user4} alt="user 4" className="hero__image hero__image-user4" />
                </div>
            </div>
        </div>
    )
}
