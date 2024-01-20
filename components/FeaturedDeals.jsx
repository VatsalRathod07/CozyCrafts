import Link from 'next/link'
import React from 'react'

const featureddeals = [
    {
        'id': '1',
        'name': 'Bookcase',
        'img': 'https://www.ikea.com/in/en/images/products/billy-bookcase-with-panel-glass-doors-white__1092186_pe862731_s5.jpg?f=s',
        'price': '179.00'
    },
    {
        'id': '2',
        'name': 'SONGESAND Bed',
        'img': 'https://www.ikea.com/in/en/images/products/kleppstad-bed-frame-white-vissle-beige__1035341_pe840528_s5.jpg?f=s',
        'price': '183.00'
    },
    {
        'id': '3',
        'name': 'Armchair',
        'img': 'https://www.ikea.com/in/en/images/products/vedbo-armchair-gunnared-light-green__0949819_pe800036_s5.jpg?f=xxs',
        'price': '116.00'
    },
    {
        'id': '4',
        'name': 'SKUBB Storage',
        'img': 'https://www.ikea.com/in/en/images/products/skubb-storage-with-6-compartments-dark-grey__0954845_pe803506_s5.jpg?f=m',
        'price': '163.00'
    },
    {
        'id': '5',
        'name': 'Desk top shelf',
        'img': 'https://www.ikea.com/in/en/images/products/pahl-desk-top-shelf-white__1031733_pe836639_s5.jpg?f=s',
        'price': '102.00'
    },

]


const FeaturedDeals = () => {
  return (
      <section className="flex flex-col gap-5 p-5 py-10">
          <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Featured Deals</h1>
              <Link href="" className="bg-white p-2 rounded-full border-2 border-[#f9f7f0]"><span>View All</span></Link>
          </div>

          <div className="flex justify-between">
              {featureddeals.map(products => (
                  <Link href="" key={products.id} className="flex flex-col">
                      <img src={products.img} alt={products.name} className="w-52 h-60 object-cover mb-2 rounded-lg" />
                      <div className="flex flex-col gap-1">
                          <p className="text-sm font-medium">{products.name}</p>
                          <p className="text-sm font-normal">${products.price}</p>
                      </div>
                  </Link>
              ))}
          </div>
          <span className="border-[#F9F8F4] border mt-3"></span>
      </section>
  )
}

export default FeaturedDeals