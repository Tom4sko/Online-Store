import React, { useState, useEffect } from 'react';

interface FilterProps {
  selectedSizes: string[];
  selectedColors: string[];
  selectedCategories: string[];
  onSizeChange: (size: string) => void;
  onColorChange: (color: string) => void;
  onCategoryChange: (category: string) => void;
}

const filter = ({ selectedSizes, selectedColors, selectedCategories, onSizeChange, onColorChange, onCategoryChange }: FilterProps) => {
    const baseColors = ["Red", "Yellow", "Blue", "Black", "White"];
    
    const [categories, setCategories] = useState<string[]>([]);
    const [sizes, setSizes] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchOptions = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/options');
                
                if (!response.ok) throw new Error('Failed to fetch filter options');
                
                const data = await response.json();
                setCategories(data.categories || ["t-shirts", "caps", "shoes", "gloves", "jackets"]);
                setSizes(data.sizes || ["S", "M", "L", "XL", "One Size"]);
            } catch (error) {
                console.error('Error fetching filter options:', error);
                setCategories(["t-shirts", "caps", "shoes", "gloves", "jackets"]);
                setSizes(["S", "M", "L", "XL", "One Size"]);
            } finally {
                setLoading(false);
            }
        };
        
        fetchOptions();
    }, []);

    const handleSizeChange = (size: string) => {
      onSizeChange(size);
    };
 
    const handleColorClick = (color: string) => {
      onColorChange(color);
    };
    
    const handleCategoryChange = (category: string) => {
      onCategoryChange(category);
    };
 
    const colorMap: Record<string, string> = {
      "Red": "bg-red-600",
      "Yellow": "bg-yellow-300",
      "Blue": "bg-blue-500",
      "Black": "bg-slate-800",
      "White": "bg-white border border-gray-300"
    };
 
    const formatCategoryName = (category: string) => {
      return category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };
    
    if (loading) {
        return <div className="w-full">Loading filters...</div>;
    }
    
    return (
      <div className="w-full flex flex-col overflow-y-scroll max-h-[calc(100vh-300px)] md:max-h-max">
        <span className="border-secondary border-t-1 w-full uppercase font-bold py-5">Category</span>
        <div className="flex flex-col items-start gap-1 pb-5">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={category}
                className="accent-black"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <span>{formatCategoryName(category)}</span>
            </label>
          ))}
        </div>
        <span className="border-secondary border-t-1 w-full uppercase font-bold py-5">Colours</span>
        <div className="flex flex-col md:flex-row items-start gap-2 pb-5 pl-1">
          {baseColors.map(color => (
            <span
              key={color}
              className={`block w-6 h-6 ${colorMap[color]} cursor-pointer ${selectedColors.includes(color) ? 'ring-2 ring-offset-2 ring-black' : ''}`}
              onClick={() => handleColorClick(color)}
              title={color}
            ></span>
          ))}
        </div>
        <span className="border-secondary border-t-1 w-full uppercase font-bold py-5">Size</span>
        <div className="flex flex-col items-start gap-1 pb-5">
          {sizes.map((size) => (
            <label key={size} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={size}
                className="accent-black"
                checked={selectedSizes.includes(size)}
                onChange={() => handleSizeChange(size)}
              />
              <span>{size}</span>
            </label>
          ))}
        </div>
      </div>
    );
};

export default filter;