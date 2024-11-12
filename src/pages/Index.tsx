import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import ServiceSelector from '@/components/ServiceSelector';
import PriceDisplay from '@/components/PriceDisplay';

const Index = () => {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [potkoviceValue, setPotkoviceValue] = useState(1);
  const [treningSelected, setTreningSelected] = useState(false);

  return (
    <div className="min-h-screen bg-accent">
      <Navigation
        selectedBreed={selectedBreed}
        onBreedSelect={setSelectedBreed}
      />
      
      <main className="container mx-auto py-8 px-4">
        {selectedBreed ? (
          <div className="space-y-8">
            <h2 className="text-3xl font-serif text-primary text-center">
              Services for {selectedBreed}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <ServiceSelector
                potkoviceValue={potkoviceValue}
                onPotkoviceChange={(value) => setPotkoviceValue(value[0])}
                treningSelected={treningSelected}
                onTreningChange={setTreningSelected}
              />
              
              <PriceDisplay
                potkoviceValue={potkoviceValue}
                treningSelected={treningSelected}
                selectedBreed={selectedBreed}
              />
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-3xl font-serif text-primary mb-4">
              Welcome to Equestrian Services
            </h2>
            <p className="text-gray-600">
              Please select a horse breed to view available services
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;