import React from 'react'
import '../styles/Heading.css'
import DateFormat from 'dateformat'

export default function Heading() {
    return (
        <div className='Heading'>
            <h1 className='Heading-List'>Tasks</h1>
            <h3 className='Heading-Date'>
                {DateFormat(Date.now(),"dddd, mmmm dS")}
            </h3>
        </div>
    )
}
