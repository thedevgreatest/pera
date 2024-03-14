import React, { useEffect, useState } from 'react'
import { LockSVG, PeraSVG } from './SVGComponent'
import { Link } from 'react-router-dom'

export default function Header() {
    const [atTop, setAtTop] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            setAtTop(window.pageYOffset === 0)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <div className={`fixed w-full bg-[#dcd6ff] z-10 ${!atTop && 'shadow'}`}>
            <div className='bg-white dark:bg-[#1a1a1a] dark:text-white rounded-t-3xl px-6 pt-[19px] pb-[13px] flex justify-between gap-6'>
                <Link to={'/'}>
                    <PeraSVG />
                </Link>
                <button
                    className='shadow-md flex gap-2 items-center justify-center dark:bg-[#242424] bg-white h-10 w-[124px] py-[10px] px-4 border dark:border-[#434345] rounded-xl disabled:cursor-not-allowed disabled:opacity-50'
                    disabled
                >
                    <LockSVG />
                    <span className='font-medium text-sm dark:text-[#434345] text-[#8f8f94]'>Locked</span>
                </button>
            </div>
        </div>
    )
}
