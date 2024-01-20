import React from 'react'

const BentoGrid = () => {
    return (
        <section className="p-5 py-10 grid grid-cols-2 gap-5">
            <div className="relative">
                <img src="https://i.pinimg.com/736x/a9/3c/25/a93c2570d6b0419fdcd7c35a5b1c8c28.jpg" alt="" className="w-full h-[620px] object-cover rounded-2xl" />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-InstrumentSerif text-4xl font-medium text-white">Quality control</h1>
            </div>

            <div className="flex flex-col gap-5">
                <img src="https://evolveindia.co/wp-content/uploads/2021/07/6_Where-Rustic-Meets-Minimalistic-Minimalist-Living-Room-Design.jpg" alt="" className="w-full h-[300px] object-cover rounded-2xl" />
                <img src="https://i0.wp.com/catesthill.com/wp-content/uploads/2019/04/Linear-wood-series-oak-fiber-side-chair-oak-canvas-414-enfold-sideboard-low-oak-sand-unfold-2-Muuto-org.jpg?resize=1024%2C768&ssl=1" alt="" className="w-full h-[300px] object-cover rounded-2xl" />
            </div>
        </section>
    )
}

export default BentoGrid