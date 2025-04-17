import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// icons
import { MdAdsClick } from "react-icons/md";

// database
import cardInformations from '@/data/catalog.json'
import usersInformations from '@/data/events.json';

interface CardsProps {
  selectedSizes: string[];
  selectedColors: string[];
  selectedCategories: string[];
}

const cards = ({ selectedSizes, selectedColors, selectedCategories }: CardsProps) => {

  const filteredCards = cardInformations.filter(card => {
    const sizeMatch = selectedSizes.length === 0 || 
      card.sizes.some(size => selectedSizes.includes(String(size)));
    
    const colorMatch = selectedColors.length === 0 || 
      selectedColors.includes(card.color);

    const categoryMatch = selectedCategories.length === 0 || 
      selectedCategories.includes(card.category);
    
    return sizeMatch && colorMatch &&  categoryMatch;
  });

 return (
    <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 w-full h-full">
      {
        filteredCards.map((card, index) => {
          const clickers = usersInformations.filter(
            (entry) => entry.product_id === card.id && entry.action === 'click'
          );
          return(
            <Link href={`/products/${card.id}`} key={index}>
              <div className="flex flex-col bg-primary w-[250px] xl:w-[300px] h-[300px] xl:h-[350px] z-10 group hover:bg-secondary hover:text-primary transition-all ease-in-out hover:scale-105">
                <div className="relative bg-slate-200 hover:bg-slate-300 h-[350px] transition-all ease-in-out">
                  <Image
                    src="/images/tshirt.png"
                    alt="Product Image"
                    fill
                    className="p-5"
                  />
                </div>
                <div className="flex flex-row justify-between w-full">
                  <h2 className="silkscreen-regular tracking-tighter">{card.title}</h2>
                  <span className="silkscreen-regular tracking-tighter text-slate-400 flex flex-row items-center align-middle"><MdAdsClick />{clickers.length}</span>
                </div>
                <span className="font-bold">{`${card.price}$`}</span>
              </div>
            </Link>
          );
        })
      }
      {filteredCards.length === 0 && (
        <div className="col-span-full text-center py-10">
          <p>No products match your selected filters.</p>
        </div>
      )}
    </div>
  )
}

export default cards;