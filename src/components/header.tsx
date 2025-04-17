import React from 'react'
import Link from 'next/link';

// icons
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const navbarLeftItems = [
    {
        'id': 1,
        'item': 'Collection',
    },
    {
        'id': 2,
        'item': 'Store',
    },
    {
        'id': 3,
        'item': 'More',
    },
]

const navbarRightItems = [
    {
        'id': 1,
        'item': 'Accessories',
    },
    {
        'id': 2,
        'item': 'Fashion',
    },
    {
        'id': 3,
        'item': 'Media Print',
    },
]

const header = () => {
  return (
    <nav className="sticky top-0 bg-primary grid grid-rows-1 grid-cols-2 md:grid-cols-4 w-full px-2 md:px-10 border-secondary border-b-1 z-50">
        <Link href="/">
            <div className="flex flex-col font-bold border-secondary border-r-1 pr-2 silkscreen-regular tracking-tighter text-2xl">
                <div className="leading-6">
                    <span>The</span>
                    <h1>Bloomstore</h1>
                    <span>WebShop</span>
                </div>
            </div>
        </Link>
        <div className="hidden md:flex flex-col justify-end border-secondary border-r-1 px-2">
            {
                navbarLeftItems.map( (navbarLeftItems, index) => {
                    return(
                        <span key={index} className="hover:font-bold cursor-pointer">{navbarLeftItems.item}</span>
                    );
                })
            }
        </div>
        <div className="hidden md:flex flex-col justify-end border-secondary border-r-1 px-2">
            {
                navbarRightItems.map( (navbarRightItems, index) => {
                    return(
                        <span key={index} className="hover:font-bold cursor-pointer">{navbarRightItems.item}</span>
                    );
                })
            }
        </div>
        <div className="flex flex-row justify-end items-center align-middle gap-4 pl-2">
            <IoIosSearch className="transition-all ease-in-out hover:mb-2 cursor-pointer" />
            <FaShoppingCart className="transition-all ease-in-out hover:mb-2 cursor-pointer" />
            <FaUser className="transition-all ease-in-out hover:mb-2 cursor-pointer" />
            <MdAttachMoney className="transition-all ease-in-out hover:mb-2 cursor-pointer" />
            <FaRegHeart className="transition-all ease-in-out hover:mb-2 cursor-pointer" />
        </div>
    </nav>
  )
}

export default header