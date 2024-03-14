import React from 'react'
import { Link } from 'react-router-dom'
import { DiscordSVG, HomeSVG, RedditSVG, SettingSVG, ShareSVG, TwitterSVG } from './SVGComponent'

const sideNav = [
    {
        name: 'Send',
        icon: <ShareSVG />
    },
    {
        name: 'Settings',
        icon: <SettingSVG />
    },
]

const sideFooter = [
    {
        name: 'Get Help',
        to: 'https://perawallet.app/support/'
    },
    {
        name: 'About Pera',
        to: 'https://perawallet.app/'
    },
    {
        name: 'Pera Explorer',
        to: 'https://explorer.perawallet.app/'
    },
    {
        name: 'Terms of Use',
        to: 'https://perawallet.app/terms-and-services/'
    },
]

const sideSocial = [
    {
        icon: <TwitterSVG />,
        to: 'https://twitter.com/PeraAlgoWallet'
    },
    {
        icon: <DiscordSVG />,
        to: 'https://discord.com/invite/gR2UdkCTXQ'
    },
    {
        icon: <RedditSVG />,
        to: 'https://www.reddit.com/r/PeraWallet/'
    },
]

export default function Aside() {
    return (
        <div className='fixed w-[240px] px-4 flex flex-col gap-2 z-0'>
            <ul className='flex flex-col gap-2'>
                <li className='w-max'>
                    <Link
                        className='w-max py-[10px] ps-3 pe-6 rounded-xl bg-[rgb(107,69,254)]/10 dark:bg-[rgb(172,142,255)]/10 dark:text-[#ac8eff] text-[#6b45fe] font-medium flex items-center gap-4'
                        to={'/'}
                    >
                        <HomeSVG />
                        <span>Home</span>
                    </Link>
                </li>
                {sideNav.map((item, index) => (
                    <li
                        key={index}
                        className='w-max'
                    >
                        <button
                            className='w-max py-[10px] ps-3 pe-6 rounded-xl dark:text-white text-black font-medium flex items-center gap-4'
                            disabled
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </button>
                    </li>
                ))}
            </ul>
            <div className='flex flex-col gap-2 ms-3'>
                <ul className='flex flex-col gap-3 mb-8'>
                    {sideFooter.map((item, index) => (
                        <li
                            key={index}
                        >
                            <Link
                                className='text-[#626268] dark:text-[#cacacc] text-[13px] font-medium hover:text-black dark:hover:text-white'
                                to={item.to}
                                target='_blank'
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className='flex items-center gap-4'>
                    {sideSocial.map((item, index) => (
                        <li
                            key={index}
                        >
                            <Link
                                to={item.to}
                                target='_blank'
                            >
                                {item.icon}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
