import React from 'react'
import Image from 'next/image'

const cardInformations = [
  {
    'id': 1,
    'productName': 'T-shirt addidas',
    'price': '14.00'
  },
  {
    'id': 2,
    'productName': 'T-shirt addidas',
    'price': '14.00'
  },
  {
    'id': 3,
    'productName': 'T-shirt addidas',
    'price': '14.00'
  },
  {
    'id': 4,
    'productName': 'T-shirt addidas',
    'price': '14.00'
  },
  {
    'id': 5,
    'productName': 'T-shirt addidas',
    'price': '14.00'
  },
  {
    'id': 6,
    'productName': 'T-shirt addidas',
    'price': '14.00'
  },
]

const cards = () => {
  return (
    <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 w-full h-full">
      {
        cardInformations.map((cardInformations, index) => {
          return(
            <div className="flex flex-col bg-primary w-[250px] xl:w-[325px] h-[300px] xl:h-[375px] z-10" key={index}>
              <div className="relative bg-slate-200 h-[350px]">
                <Image
                  src="/images/tshirt.png"
                  alt="Product Image"
                  fill
                  className="p-5"
                />
              </div>
              <h2>{cardInformations.productName}</h2>
              <span className="font-bold">{`${cardInformations.price}\$`}</span>
            </div>
          );
        })
      }
    </div>
  )
}

export default cards