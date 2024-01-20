import Link from 'next/link';
import React from 'react'

const furniture = [
    {
        'id': '1',
        'name': 'LIVING ROOM',
        'img': 'https://i.pinimg.com/564x/23/a2/f1/23a2f138a05345cb94a628d076018b16.jpg',
    },
    {
        'id': '2',
        'name': 'HOME OFFICE',
        'img': 'https://i.pinimg.com/564x/28/a6/99/28a6994f3acf843c274c2318f5d17e8e.jpg',
    },
    {
        'id': '3',
        'name': 'BEDROOM',
        'img': 'https://i.pinimg.com/564x/ca/4a/f0/ca4af0410a66f19b07ff434aea1f18b8.jpg',
    },
    {
        'id': '4',
        'name': 'DINING ROOM',
        'img': 'https://i.pinimg.com/564x/29/12/1f/29121ff5dbab508df5f7851b2f51f771.jpg',
    },
    {
        'id': '5',
        'name': 'OUTDOOR',
        'img': 'https://i.pinimg.com/736x/f3/6a/df/f36adff26e616f87bb66c201080e137c.jpg',
    },
    {
        'id': '6',
        'name': 'ROOM SETS',
        'img': 'https://i.pinimg.com/564x/49/1e/76/491e760a86bc7bae304afcafe02a2aee.jpg',
    },
]

const Categories = () => {
    return (
        <section className="flex flex-col gap-5 justify-between p-5 py-10">
            <h1 className="text-center text-xl font-bold">Categories</h1>
            <div className="flex justify-between">
                {furniture.map(category => (
                    <Link href="" key={category.id} className="flex flex-col items-center">
                        <img src={category.img} alt={category.name} className="w-44 h-44 object-cover mb-2 rounded-lg" />
                        <p className="text-center font-medium">{category.name}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Categories