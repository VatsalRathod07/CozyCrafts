import Link from 'next/link'
import React from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";


const Navbar = () => {
    return (
        <nav className="flex flex-col p-5 gap-6">
            <div className="flex justify-between items-center">
                <div className="flex gap-5 font-medium">
                    <Link href="">regions | en</Link>
                    <Link href="">store</Link>
                </div>
                <Link href="" className="font-medium">sign in</Link>
            </div>
            <span className="border-[#F9F8F4] border"></span>
            <div className="flex justify-between items-center">
                <div className="flex gap-5">
                    <Link href="">
                        <HiOutlineMenuAlt4 size={20} />
                    </Link>

                    <Link href="">
                        <IoSearchOutline size={20} />
                    </Link>
                </div>

                <div className="flex gap-8 items-centers font-medium">
                    <Link href="">Featured</Link>
                    <Link href="">sale</Link>
                    <Link href="">living room</Link>
                    <Link href="">dining room</Link>
                    <Link href="">bedroom</Link>
                    <Link href="">home office</Link>
                    <Link href="">outdoor</Link>
                    <Link href="">decor</Link>
                </div>
                <div className="flex gap-5 items-center">
                    <Link href="">
                        <IoMdHeartEmpty size={20} />
                    </Link>
                    <Link href="" className="flex items-center gap-1">
                        <SlHandbag size={20} />
                        <p>1</p>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar