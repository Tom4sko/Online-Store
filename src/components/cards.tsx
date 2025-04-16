import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// database
import cardInformations from '@/data/catalog.json'

const cards = () => {
  return (
    <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 w-full h-full">
      {
        cardInformations.map((cardInformations, index) => {
          return(
            <Link href={`/products/${cardInformations.id}`} key={index}>
              <div className="flex flex-col bg-primary w-[250px] xl:w-[300px] h-[300px] xl:h-[350px] z-10">
                <div className="relative bg-slate-200 h-[350px]">
                  <Image
                    src="/images/tshirt.png"
                    alt="Product Image"
                    fill
                    className="p-5"
                  />
                </div>
                <h2>{cardInformations.title}</h2>
                <span className="font-bold">{`${cardInformations.price}\$`}</span>
              </div>
            </Link>
          );
        })
      }
    </div>
  )
}

export default cards