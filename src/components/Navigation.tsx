import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const horseBreeds = [
  'Arabian',
  'Turkoman',
  'Missouri',
  'Breton',
  'Norfolk Roadster',
  'Mustang'
];

interface NavigationProps {
  onBreedSelect: (breed: string) => void;
  selectedBreed: string;
}

const Navigation: React.FC<NavigationProps> = ({ onBreedSelect, selectedBreed }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-serif">Equestrian Services</h1>
          
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 bg-secondary/20 px-4 py-2 rounded-lg hover:bg-secondary/30 transition-colors"
            >
              <span>{selectedBreed || 'Select Horse Breed'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50">
                {horseBreeds.map((breed) => (
                  <button
                    key={breed}
                    onClick={() => {
                      onBreedSelect(breed);
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-primary hover:bg-secondary/20 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {breed}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;