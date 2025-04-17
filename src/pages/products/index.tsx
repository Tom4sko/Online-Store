import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";

// components
import Cards from '@/components/cards'
import Filter from '@/components/filter'

const index = () => {
  const router = useRouter();

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    const query: Record<string, string> = {};

    if (selectedCategories.length === 1) query.category = selectedCategories[0];
    if (selectedColors.length === 1) query.color = selectedColors[0].toLowerCase();
    if (selectedSizes.length === 1) query.size = selectedSizes[0].toLowerCase();


    router.push({
      pathname: router.pathname,
      query: query,
    }, undefined, { shallow: true });
  }, [selectedSizes, selectedColors, selectedCategories]);

  const handleSizeChange = (size: string) => {
    setSelectedSizes(prev => {
      if (prev.includes(size)) {
        return prev.filter(s => s !== size);
      } else {
        return [...prev, size];
      }
    });
  };

  const handleColorChange = (color: string) => {
    setSelectedColors(prev => {
      if (prev.includes(color)) {
        return prev.filter(c => c !== color);
      } else {
        return [...prev, color];
      }
    });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  return (
    <main className="min-h-screen px-2 md:px-10 bg-primary">
      <div className="flex flex-col">
        <h2 className="text-secondary font-bold text-5xl my-14 silkscreen-regular tracking-tighter">Products/Explore</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-1 mb-14 gap-5 xl:gap-22">
          <div className="col-span-1">
            <div className="sticky top-20">
              <Filter 
                selectedSizes={selectedSizes}
                selectedColors={selectedColors}
                selectedCategories={selectedCategories}
                onSizeChange={handleSizeChange}
                onColorChange={handleColorChange}
                onCategoryChange={handleCategoryChange}
              />
            </div>
          </div>
          <div className="col-span-2 md:col-span-3">
            <Cards 
              selectedSizes={selectedSizes} 
              selectedColors={selectedColors}
              selectedCategories={selectedCategories} 
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default index;