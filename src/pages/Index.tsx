import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import ServiceSelector from '@/components/ServiceSelector';
import PriceDisplay from '@/components/PriceDisplay';
import HorseStats from '@/components/HorseStats';
import type { HorseVariant } from '@/types/horse';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedVariant, setSelectedVariant] = useState<HorseVariant | null>(null);
  const [potkoviceValue, setPotkoviceValue] = useState(1);
  const [treningSelected, setTreningSelected] = useState(false);

  const handleBreedSelect = (breed: string, variant: HorseVariant) => {
    setSelectedBreed(breed);
    setSelectedVariant(variant);
  };

  return (
    <div className="min-h-screen bg-accent">
      <Navigation
        selectedBreed={selectedBreed}
        onBreedSelect={handleBreedSelect}
      />
      
      <main className="container mx-auto py-8 px-4">
        {selectedVariant ? (
          <div className="space-y-8">
            <h2 className="text-3xl font-serif text-primary text-center">
              {selectedBreed} - {selectedVariant.name}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-4">
                    <img 
                      src={new URL(selectedVariant.imageUrl, import.meta.url).href}
                      alt={`${selectedBreed} ${selectedVariant.name}`}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </CardContent>
                </Card>
                <HorseStats {...selectedVariant.stats} />
                <ServiceSelector
                  potkoviceValue={potkoviceValue}
                  onPotkoviceChange={(value) => setPotkoviceValue(value[0])}
                  treningSelected={treningSelected}
                  onTreningChange={setTreningSelected}
                />
              </div>
              
              <PriceDisplay
                potkoviceValue={potkoviceValue}
                treningSelected={treningSelected}
                selectedBreed={selectedBreed}
                basePrice={selectedVariant.basePrice}
              />
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-3xl font-serif text-primary mb-4">
              Welcome to Equestrian Services
            </h2>
            <p className="text-gray-600">
              Please select a horse breed and variant to view available services
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;