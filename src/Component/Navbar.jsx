import React from 'react'
import { AlgoSVG } from './SVGComponent'

export default function Navbar() {
    return (
        <nav className={`px-[22px] py-6 fixed top-0 left-0 w-full z-10`}>
            <img src={'/header-image.png'} className='absolute top-0 left-0 w-full h-full -z-10' alt="" />

            <div className='flex justify-end gap-2 items-center'>
                <div className='flex gap-2 items-center'>
                    <p className='text-[13px]'>ALGO</p>
                    <div className='w-6 aspect-square rounded-full bg-black flex items-center justify-center'>
                        <AlgoSVG />
                    </div>
                    <p className='text-sm font-medium'>$0.2836</p>
                </div>
                <div className="py-1 px-2 rounded-[40px] bg-[rgb(107,69,254)]/20 text-[#1a1a1a]">
                    <p className='text-[11px]'>-0.38 -1.35% 1D</p>
                </div>
            </div>
        </nav >
    )
}
