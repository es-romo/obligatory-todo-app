import React from 'react'
import '../styles/Heading.css'
import DateFormat from 'dateformat'

export default function Heading() {
    return (
        <div className='Heading'>
            <h1>Tasks</h1>
            <h3>{DateFormat(Date.now(),"dddd, mmmm dS")}</h3>
        </div>
    )
}
