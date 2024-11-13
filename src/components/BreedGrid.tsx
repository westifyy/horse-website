import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { horses } from '../data/horses';

interface BreedGridProps {
  onBreedSelect: (breedName: string) => void;
}

const BreedGrid: React.FC<BreedGridProps> = ({ onBreedSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {horses.map((breed) => (
        <Card key={breed.name} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif text-primary mb-4">{breed.name}</h3>
            <Button 
              variant="secondary" 
              onClick={() => onBreedSelect(breed.name)}
              className="w-full"
            >
              Select Breed
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BreedGrid;