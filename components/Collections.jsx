import Link from 'next/link'
import React from 'react'

const Collections = () => {
    return (
        <section className="flex flex-col gap-5 p-5 py-10">
            <div className="flex flex-col gap-5 items-center">
                <h1 className="text-xl font-bold text-center max-w-xs">GET YOUR WEEKLY FIX OF STYLE INSPIRATIONS</h1>

                <div className="grid grid-cols-3 gap-5">
                    <div className="relative">
                        <img src="https://i.pinimg.com/564x/7c/56/59/7c56594c4df5293711cf68dc11969609.jpg" alt="" className="w-full h-[400px] object-cover rounded-2xl" />
                        <Link href="" className="bg-white p-2 px-3 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                            <h1 className="text-sm">Collection</h1>
                        </Link>
                    </div>
                    <div className="relative">
                        <img src="https://i.pinimg.com/564x/8e/75/7d/8e757d720b3a6aed7584d8fdb621d8fb.jpg" alt="" className="w-full h-[400px] object-cover rounded-2xl" />
                        <Link href="" className="bg-white p-2 px-3 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                            <h1 className="text-sm ">Collection</h1>
                        </Link>
                    </div>
                    <div className="relative">
                        <img src="https://i.pinimg.com/564x/5d/ea/29/5dea29d687789414449748cdc0179320.jpg" alt="" className="w-full h-[400px] object-cover rounded-2xl" />
                        <Link href="" className="bg-white p-2 px-3 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                            <h1 className="text-sm ">Collection</h1>
                        </Link> 
                    </div>
                </div>
            </div>
            <span className="border-[#F9F8F4] border mt-3"></span>
        </section>
    )
}

export default Collections