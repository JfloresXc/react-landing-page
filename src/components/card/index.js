import React from 'react'

import skin from 'storage/skin.jpg'
import './card.css'

function Card() {
    return (
        <div className="card">
            <div className="card__header">
                <h3 className="card__title">Efficient Collaborating</h3>
                <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Auctor neque sed imperdiet
                    nibh lectus feugiat nunc sem.
                </p>
            </div>
            <div className="card__body">
                <img src={skin} alt='skin' className="card__skin"/>
                <p className="card__author-name">Jane Cooper</p>
                <p className="card__work-name">CEO at ABC Corporation</p>
            </div>
        </div>
    )
}

export default React.memo(Card)
