import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// icons
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const menuLinks = [
    {
        'id': 1,
        'productName': 'T-shirts',
        'link': '/'
    },
    {
        'id': 2,
        'productName': 'Pants',
        'link': '/'
    },
    {
        'id': 3,
        'productName': 'Boots',
        'link': '/'
    },
    {
        'id': 4,
        'productName': 'Hats',
        'link': '/'
    },
]

const footer = () => {
  return (
    <footer className="bg-primary grid grid-rows-1 grid-cols-4 w-full border-secondary border-t-1 px-2 md:px-10 z-50">
        <div className="hidden md:block border-secondary border-r-1 col-span-2 px-2">
            <Image
                src="/images/br_logo.png"
                width={200}
                height={250}
                alt='Bloomreach logo'
            />
        </div>
        <div className="border-secondary border-r-1 px-2">
            {
                menuLinks.map((menuLinks, index) => {
                    return(
                        <div className="hover:font-bold" key={index}>
                            <Link href="/">{menuLinks.productName}</Link>
                        </div>
                    );
                })
            }
        </div>
        <div className="flex flex-row justify-end align-middle items-center gap-4 px-2 w-full col-span-3 md:col-span-1">
            <FaInstagram className="transition-all ease-in-out hover:mb-2 cursor-pointer" />
            <FaFacebook className="transition-all ease-in-out hover:mb-2 cursor-pointer" />
            <FaTiktok className="transition-all ease-in-out hover:mb-2 cursor-pointer" />
            <BsTwitterX className="transition-all ease-in-out hover:mb-2 cursor-pointer" />
        </div>
    </footer>
  )
}

export default footer