import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import ServiceSelector from '@/components/ServiceSelector';
import PriceDisplay from '@/components/PriceDisplay';
import HorseStats from '@/components/HorseStats';
import LoginForm from '@/components/LoginForm';
import BreedGrid from '@/components/BreedGrid';
import VariantSelector from '@/components/VariantSelector';
import { useAuth } from '@/contexts/AuthContext';
import type { HorseVariant } from '@/types/horse';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { isAuthenticated } = useAuth();
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedVariant, setSelectedVariant] = useState<HorseVariant | null>(null);
  const [potkoviceValue, setPotkoviceValue] = useState(1);
  const [treningSelected, setTreningSelected] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleBreedSelect = (breed: string) => {
    setSelectedBreed(breed);
    setSelectedVariant(null);
  };

  const handleVariantSelect = (breed: string, variant: HorseVariant) => {
    setSelectedBreed(breed);
    setSelectedVariant(variant);
  };

  const handleBack = () => {
    if (selectedVariant) {
      setSelectedVariant(null);
    } else {
      setSelectedBreed('');
    }
  };

  return (
    <div className="min-h-screen bg-accent">
      <Navigation />
      
      <main className="container mx-auto py-8 px-4">
        {showLoginForm ? (
          <div className="max-w-md mx-auto mt-8">
            <Button 
              variant="outline" 
              onClick={() => setShowLoginForm(false)}
              className="mb-4"
            >
              ← Back
            </Button>
            <LoginForm />
          </div>
        ) : (
          <>
            {!selectedBreed && (
              <div className="text-center py-12">
                <h2 className="text-3xl font-serif text-primary mb-8">
                  Select a Horse Breed
                </h2>
                <BreedGrid onBreedSelect={handleBreedSelect} />
              </div>
            )}

            {selectedBreed && !selectedVariant && (
              <VariantSelector
                selectedBreed={selectedBreed}
                onVariantSelect={handleVariantSelect}
                onBack={handleBack}
              />
            )}

            {selectedVariant && (
              <div className="space-y-8">
                <Button variant="outline" onClick={handleBack}>
                  ← Back
                </Button>

                <h2 className="text-3xl font-serif text-primary">
                  {selectedBreed} - {selectedVariant.name}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="p-4">
                      <img 
                        src={selectedVariant.imageUrl}
                        alt={`${selectedBreed} ${selectedVariant.name}`}
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                    </CardContent>
                  </Card>

                  {isAuthenticated && (
                    <div className="space-y-8">
                      <HorseStats {...selectedVariant.stats} />
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
                        basePrice={selectedVariant.basePrice}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Index;