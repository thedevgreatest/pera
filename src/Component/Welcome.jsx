import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RightArrowSVG } from './SVGComponent'

export default function Welcome() {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const preferMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

    useEffect(() => {
        if (preferMode) {
            setIsDarkMode(true)
        } else (
            setIsDarkMode(false)
        )
    }, [preferMode, isDarkMode])

    return (
        <div className='w-full ps-[240px]'>
            <div className='mx-auto w-max'>
                <h1 className='text-[#1a1a1a] dark:text-white font-medium text-[52px] leading-[58px]'>
                    Welcome to Pera Wallet
                </h1>
                <p className='mt-4 text-sm w-[452px] text-[#1a1a1a] dark:text-white leading-6 font-normal'>
                    Pera Wallet is the easiest and safest way to store, buy and swap on the Algorand blockchain.
                </p>

                <div className='mt-20 mb-8 grid grid-cols-2 gap-[28px] max-w-[788px] w-full'>
                    {/* Create new account */}
                    <button
                        className='disabled:cursor-not-allowed rounded-2xl h-[326px] shadow-md bg-white dark:bg-[#242424] flex flex-col justify-between border border-white/20'
                        disabled
                    >
                        <div className='pt-6 px-6 flex items-center gap-2'>
                            <p className="text-[#8f8f94] text-lg font-medium leading-6">
                                I want to create an account
                            </p>
                        </div>

                        <div className='relative mx-7'>
                            <img
                                className='w-full h-full object-contain'
                                src={isDarkMode ? "/create-account.png" : "/create-account-light.png"}
                                alt=""
                            />
                        </div>

                        <p className="px-6 pb-6 text-[#8f8f94] text-[13px] font-normal leading-5">
                            Create a new Algorand account
                        </p>
                    </button>
                    {/* Already have an account */}
                    <Link
                        className='group rounded-2xl h-[326px] shadow-md bg-white dark:bg-[#242424] flex flex-col justify-between border border-white/20'
                        to={'/import'}
                    >
                        <div className='px-6 pt-6 flex flex-nowrap items-center gap-2 dark:group-hover:text-[#ac8eff] group-hover:text-[#6b45fe] text-black dark:text-white overflow-hidden w-[240px] group-hover:w-auto'>
                            <p className="min-w-[210px] text-lg font-medium leading-6">
                                I already have an account
                            </p>
                            <RightArrowSVG />
                        </div>

                        <div className='relative'>
                            <img
                                className='w-full h-full object-contain'
                                src={isDarkMode ? "/have-account.png" : "/have-account-light.png"}
                                alt=""
                            />
                        </div>

                        <p class="px-6 pb-6 text-[#8f8f94] dark:group-hover:text-white group-hover:text-[#1a1a1a] text-[13px] leading-5 font-normal">
                            Import an existing Algorand account from another device or backup
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
