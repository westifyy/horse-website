import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { horses } from '../data/horses';
import type { HorseVariant } from '../types/horse';

interface VariantSelectorProps {
  selectedBreed: string;
  onVariantSelect: (breed: string, variant: HorseVariant) => void;
  onBack: () => void;
}

const VariantSelector: React.FC<VariantSelectorProps> = ({ 
  selectedBreed, 
  onVariantSelect,
  onBack 
}) => {
  const breed = horses.find(h => h.name === selectedBreed);
  
  if (!breed) return null;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Button variant="outline" onClick={onBack} className="mb-4">
        ← Back to Breeds
      </Button>
      
      <h2 className="text-2xl font-serif text-primary mb-6">{breed.name} Variants</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {breed.variants.map((variant) => (
          <Card key={variant.name} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-serif text-primary mb-2">{variant.name}</h3>
              <Button 
                variant="secondary" 
                onClick={() => onVariantSelect(breed.name, variant)}
                className="w-full"
              >
                Select Variant
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VariantSelector;