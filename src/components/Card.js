import React from 'react'
import emptyImg from '../images/empty.png'
import circlesImg from '../images/circles.png'
import './styles/Card.css'

const Card = ({title, description, img, leftColor, rightColor}) => (
    <div className="card mx-auto Fitness-Card mt-3"
        style={{
            backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}, ${rightColor || '#2F80ED'})`
        }}
    >
        <div className="p-2">
            <div className="row center">
                <div className="col-4">
                    <img src={img || emptyImg} className="float-right" />
                </div>
                <div className="col-8 Fitness-Card-Info">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>
)

export default Card
