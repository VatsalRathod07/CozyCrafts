import Link from 'next/link'
import React from 'react'
import { FaInstagram } from "react-icons/fa6";

const SocialImgaes = [
    {
        'id': '1',
        'img': 'https://i.pinimg.com/564x/26/6e/1d/266e1d09b212935c69e75b44977b8f37.jpg'
    },
    {
        'id': '2',
        'img': 'https://i.pinimg.com/564x/f8/f7/e0/f8f7e0c7f0bb4d92da2fe421f8c55137.jpg'
    },
    {
        'id': '3',
        'img': 'https://i.pinimg.com/564x/48/0e/cc/480ecc28ca3e1f05a46b97f65f985d72.jpg'
    },
    {
        'id': '4',
        'img': 'https://i.pinimg.com/564x/f3/c3/7a/f3c37a6f2bb807e941c5614c6f9e9b55.jpg'
    },
    {
        'id': '5',
        'img': 'https://i.pinimg.com/564x/af/6b/90/af6b9051b693cfd0d71b182765711945.jpg'
    },
    {
        'id': '6',
        'img': 'https://i.pinimg.com/564x/db/a0/27/dba0273a04cb7b34550c96aaf524fa16.jpg'
    },
]

const Social = () => {
  return (
      <section className="flex flex-col gap-7 p-5 py-10">
        <div className="flex flex-col gap-3 items-center">
            <h1 className="text-center font-bold text-xl">Grow With us instagram</h1>
            <Link href="" className="border border-black py-2 px-6 rounded-full text-sm">@CozyCrafts</Link>
        </div>
        <div className="flex justify-between gap-5">
              {SocialImgaes.map((social) => (
                  <Link href="" id={social.id} className="relative" key={social.id}>
                      <div className="relative w-40 h-40 overflow-hidden rounded-md">
                          <img src={social.img} alt="" className="w-full h-full object-cover rounded-md"/>
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-linear flex items-center justify-center">
                              <FaInstagram className="text-white" size={30} />
                          </div>
                      </div>
                  </Link>
              ))}
        </div>
          <span className="border-[#F9F8F4] border"></span>
      </section>
  )
}

export default Social