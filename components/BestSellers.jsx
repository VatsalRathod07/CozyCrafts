import Link from 'next/link'
import React from 'react'

const bestsellers = [
    {
        'id': '1',
        'name': 'Henk cave chair',
        'img': 'https://i.pinimg.com/564x/99/7d/72/997d725b6b03b32c7d9a4d9fa7b38b1b.jpg',
        'price': '179.00'
    },
    {
        'id': '2',
        'name': 'Henk Cave bed',
        'img': 'https://i.pinimg.com/564x/7b/fa/9c/7bfa9cf99f540bc5e881e76f6f166062.jpg',
        'price': '183.00'
    },
    {
        'id': '3',
        'name': 'Unique bedside',
        'img': 'https://i.pinimg.com/564x/aa/80/71/aa8071d869d03bceb09c7e88c748187e.jpg',
        'price': '116.00'
    },
    {
        'id': '4',
        'name': 'Cave curved divan',
        'img': 'https://i.pinimg.com/564x/df/d7/11/dfd7119461c2a05bf133e2558d69fc71.jpg',
        'price': '163.00'
    },
    {
        'id': '5',
        'name': 'Coffee Table',
        'img': 'https://i.pinimg.com/564x/10/97/42/109742a7803d6d70462630358175f26d.jpg',
        'price': '102.00'
    },

]

const BestSellers = () => {
    return (
        <section className="flex flex-col gap-7 p-5 py-10 bg-[#F9F8F4]">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Best Seller</h1>
                <Link href="" className="bg-white p-2 rounded-full border-2 border-[#f9f7f0]"><span>View All</span></Link>
            </div>

            <div className="flex gap-8 items-centers font-medium justify-center">
                <Link href="">living room</Link>
                <Link href="">bedroom</Link>
                <Link href="">orgainzer</Link>
                <Link href="">Table</Link>
                <Link href="">chair</Link>
                <Link href="">smart furniture</Link>
            </div>

            <div className="flex justify-between">
                {bestsellers.map(products => (
                    <Link href="" key={products.id} className="flex flex-col">
                        <img src={products.img} alt={products.name} className="w-52 h-52 object-cover mb-2 rounded-lg" />
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium">{products.name}</p>
                            <p className="text-sm font-normal">${products.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default BestSellers