import React from 'react';

interface PriceDisplayProps {
  potkoviceValue: number;
  treningSelected: boolean;
  selectedBreed: string;
  basePrice: number;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
  potkoviceValue,
  treningSelected,
  selectedBreed,
  basePrice,
}) => {
  const potkovicePrice = potkoviceValue * 80;
  const treningPrice = treningSelected ? 100 : 0;
  const totalPrice = basePrice + potkovicePrice + treningPrice;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-serif text-primary mb-4">Price Summary</h3>
      <div className="space-y-2">
        {basePrice > 0 && (
          <div className="flex justify-between text-gray-600">
            <span>Base Price</span>
            <span>${basePrice}</span>
          </div>
        )}
        <div className="flex justify-between text-gray-600">
          <span>Potkovice (Level {potkoviceValue})</span>
          <span>${potkovicePrice}</span>
        </div>
        {treningSelected && (
          <div className="flex justify-between text-gray-600">
            <span>Trening</span>
            <span>${treningPrice}</span>
          </div>
        )}
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between font-semibold text-primary text-lg">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDisplay;