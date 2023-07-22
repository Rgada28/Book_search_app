import React from 'react'
import spinner from '../spinner.svg'
import "../styles/LoadingBox.css"

export default function LoadingBox() {
    return (
        <div className="loading-box">
            <img src={spinner} style={{ "backgroundImage": "url(./spinner.png)" }} className="spinner" alt="Spinner" />
        </div>
    )
}
