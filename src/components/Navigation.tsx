import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const arabianTypes = [
  { name: 'Egyptian Arabian', basePrice: 1000 },
  { name: 'Polish Arabian', basePrice: 800 },
  { name: 'Spanish Arabian', basePrice: 900 },
  { name: 'Russian Arabian', basePrice: 850 }
];

const horseBreeds = [
  'Turkoman',
  'Missouri',
  'Breton',
  'Norfolk Roadster',
  'Mustang'
];

interface NavigationProps {
  onBreedSelect: (breed: string, basePrice?: number) => void;
  selectedBreed: string;
}

const Navigation: React.FC<NavigationProps> = ({ onBreedSelect, selectedBreed }) => {
  const [isArabianOpen, setIsArabianOpen] = useState(false);

  return (
    <nav className="bg-primary text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-serif">Equestrian Services</h1>
          
          <div className="flex flex-wrap gap-4">
            {/* Arabian with submenu */}
            <div className="relative">
              <button
                onClick={() => setIsArabianOpen(!isArabianOpen)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedBreed.includes('Arabian') 
                    ? 'bg-secondary/40' 
                    : 'bg-secondary/20 hover:bg-secondary/30'
                }`}
              >
                <span>Arabian</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isArabianOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isArabianOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50">
                  {arabianTypes.map((type) => (
                    <button
                      key={type.name}
                      onClick={() => {
                        onBreedSelect(type.name, type.basePrice);
                        setIsArabianOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-primary hover:bg-secondary/20 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {type.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Other breeds */}
            {horseBreeds.map((breed) => (
              <button
                key={breed}
                onClick={() => onBreedSelect(breed)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedBreed === breed 
                    ? 'bg-secondary/40' 
                    : 'bg-secondary/20 hover:bg-secondary/30'
                }`}
              >
                {breed}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
