import React, { useEffect, useState } from 'react'
import { LeftArrowSVG, LockSVG, PeraNormalSVG } from './SVGComponent'
import { Link } from 'react-router-dom'

export default function ImportHeader() {
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
            <div className='bg-white rounded-t-3xl px-6 pt-[19px] pb-[13px] flex justify-between gap-6'>
                <div className='flex items-center gap-5'>
                    <Link to={'/'}>
                        <PeraNormalSVG />
                    </Link>
                    <Link
                        className='border-s flex items-center gap-2 p-[10px] leading-5 font-medium text-[#626268] hover:text-[#1a1a1a]'
                        to={'/'}
                    >
                        <LeftArrowSVG />
                        <span>Back to Home</span>
                    </Link>
                </div>
                <button
                    className='shadow-md flex gap-2 items-center justify-center bg-white h-10 w-[124px] py-[10px] px-4 border rounded-xl disabled:cursor-not-allowed disabled:opacity-50'
                    disabled
                >
                    <LockSVG />
                    <span className='font-medium text-sm text-[#8f8f94]'>Locked</span>
                </button>
            </div>
        </div>
    )
}
