import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { horses } from '../data/horses';
import type { HorseVariant } from '../types/horse';

interface NavigationProps {
  onBreedSelect: (breed: string, variant: HorseVariant) => void;
  selectedBreed: string;
}

const Navigation: React.FC<NavigationProps> = ({ onBreedSelect, selectedBreed }) => {
  const [openBreed, setOpenBreed] = useState<string | null>(null);

  return (
    <nav className="bg-primary text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-serif">Equestrian Services</h1>
          
          <div className="flex flex-wrap gap-4">
            {horses.map((breed) => (
              <div key={breed.name} className="relative">
                <button
                  onClick={() => setOpenBreed(openBreed === breed.name ? null : breed.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    selectedBreed === breed.name 
                      ? 'bg-secondary/40' 
                      : 'bg-secondary/20 hover:bg-secondary/30'
                  }`}
                >
                  <span>{breed.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openBreed === breed.name ? 'rotate-180' : ''}`} />
                </button>
                
                {openBreed === breed.name && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50">
                    {breed.variants.map((variant) => (
                      <button
                        key={variant.name}
                        onClick={() => {
                          onBreedSelect(breed.name, variant);
                          setOpenBreed(null);
                        }}
                        className="block w-full text-left px-4 py-2 text-primary hover:bg-secondary/20 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        <div className="font-medium">{variant.name}</div>
                        <div className="text-sm text-gray-600">${variant.basePrice}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;