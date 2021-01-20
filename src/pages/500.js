import React from 'react'
import FatalErrorImg from '../images/500.png'

export default function FatalError() {
    return (
        <div className="text-center">
            <h1>Error: 500 Unexpected Error</h1>  
            <img src={FatalErrorImg} alt="500 Unexpected Error"/>
        </div>
    )
}

