import React from 'react'
import Aside from './Aside'
import Welcome from './Welcome'

export default function Main() {
    return (
        <div className='relative pt-8 pb-10 bg-white dark:bg-[#1a1a1a] dark:text-white flex'>
            <Aside />
            <Welcome />
        </div>
    )
}
