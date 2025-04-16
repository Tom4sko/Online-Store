import React from 'react'
import Link from 'next/link';

// icons
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const header = () => {
  return (
    <nav className="sticky top-0 bg-primary grid grid-rows-1 grid-cols-2 md:grid-cols-4 w-full px-2 md:px-10 border-secondary border-b-1 z-50">
        <Link href="/">
            <div className="flex flex-col font-bold border-secondary border-r-1 pr-2">
                <span>The</span>
                <h1>Bloomstore</h1>
                <span>WebShop</span>
            </div>
        </Link>
        <div className="hidden md:flex flex-col justify-end border-secondary border-r-1 px-2">
            <span>Collection</span>
            <h1>Store</h1>
            <span>More</span>
        </div>
        <div className="hidden md:flex flex-col justify-end border-secondary border-r-1 px-2">
            <span>Accessories</span>
            <h1>Fashion</h1>
            <span>Media Print</span>
        </div>
        <div className="flex flex-row justify-end items-center align-middle gap-4 pl-2">
            <IoIosSearch />
            <FaShoppingCart />
            <FaUser />
            <MdAttachMoney />
            <FaRegHeart />
        </div>
    </nav>
  )
}

export default header