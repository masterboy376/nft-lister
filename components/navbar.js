import React from 'react'
import Image from 'next/image'
import navlogo from '../public/header/cryptopunk-logo.png'
import searchlogo from '../public/header/search.png'
import themeswitch from '../public/header/theme-switch.png'

const Navbar = () => {
    return (
        <>
            <nav className='w-full flex justify-evenly items-center py-4 '>
                <div className="w-1/6 flex justify-center items-center">
                    <Image src={navlogo} priority quality={100} alt="NFT Heaven" className='w-full h-auto'></Image>
                </div>
                <div className="w-10/12 px-4 mx-auto flex items-center rounded-full bg-gray-700">
                    <Image src={searchlogo} alt="" className='w-4 h-4'></Image>
                    <input className='w-full px-4 py-2 text-md text-white bg-transparent focus:outline-none' type="text" name="search" id="search" placeholder='collection, item or user...' />
                </div>
                <div className="w-3/5 flex justify-evenly items-center">
                    <p className="hover:text-white text-gray-400 cursor-pointer text-base">Drops</p>
                    <p className="hover:text-white text-gray-400 cursor-pointer text-base">Marketplace</p>
                    <p className="hover:text-white text-gray-400 cursor-pointer text-base">Create</p>
                    <button className="bg-gray-700 rounded-full h-10 w-10 p-2 flex items-center justify-center">
                        <Image src={themeswitch} alt="light theme" quality={100} priority className='w-4 h-4'></Image>
                    </button>
                    <button className="bg-gradient-to-r from-cyan-400 active:from-cyan-500 to-blue-400 active:to-blue-500 text-black rounded-full h-10 w-2/6 p-1 flex items-center justify-center">
                        Get In
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar