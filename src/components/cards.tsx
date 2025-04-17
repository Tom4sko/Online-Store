import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdAdsClick } from "react-icons/md";

interface CardInfo {
  id: number;
  title: string;
  price: number;
  sizes: (string | number)[];
  color: string;
  category: string;
}

interface UserEvent {
  product_id: number;
  user_id: number;
  action: 'view' | 'click';
}

interface CardsProps {
  selectedSizes: string[];
  selectedColors: string[];
  selectedCategories: string[];
}

const cards = ({ selectedSizes, selectedColors, selectedCategories }: CardsProps) => {
  const [cardInformations, setCardInformations] = useState<CardInfo[]>([]);
  const [usersInformations, setUsersInformations] = useState<UserEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const cardsResponse = await fetch('/api/catalog');
        const eventsResponse = await fetch('/api/events');
        
        if (!cardsResponse.ok) throw new Error('Failed to fetch catalog data');
        if (!eventsResponse.ok) throw new Error('Failed to fetch events data');
        
        const cardsData = await cardsResponse.json();
        const eventsData = await eventsResponse.json();
        
        setCardInformations(cardsData);
        setUsersInformations(eventsData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCards = cardInformations.filter(card => {
    const sizeMatch = selectedSizes.length === 0 ||
      card.sizes.some(size => selectedSizes.includes(String(size)));
   
    const colorMatch = selectedColors.length === 0 ||
      selectedColors.includes(card.color);
    
    const categoryMatch = selectedCategories.length === 0 ||
      selectedCategories.includes(card.category);
   
    return sizeMatch && colorMatch && categoryMatch;
  });

  if (loading) return <div className="col-span-full text-center py-10">Loading products...</div>;
  if (error) return <div className="col-span-full text-center py-10 text-red-500">Error: {error}</div>;

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
      {filteredCards.length === 0 && !loading && (
        <div className="col-span-full text-center py-10">
          <p>No products match your selected filters.</p>
        </div>
      )}
    </div>
  );
}

export default cards;
