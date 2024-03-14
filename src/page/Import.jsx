import React from 'react'
import Navbar from '../Component/Navbar'
import NavBreak from '../Component/NavBreak'
import HeaderBreak from '../Component/HeaderBreak'
import ImportHeader from '../Component/ImportHeader'
import ImportWallet from '../Component/ImportWallet'

export default function Import() {
    return (
        <div>
            <Navbar />
            <NavBreak />
            <ImportHeader />
            <HeaderBreak />
            <ImportWallet />
        </div>
    )
}
