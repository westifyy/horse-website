import React from 'react';
import { Slider } from "@/components/ui/slider";

interface ServiceSelectorProps {
  potkoviceValue: number;
  onPotkoviceChange: (value: number[]) => void;
  treningSelected: boolean;
  onTreningChange: (selected: boolean) => void;
}

const ServiceSelector: React.FC<ServiceSelectorProps> = ({
  potkoviceValue,
  onPotkoviceChange,
  treningSelected,
  onTreningChange,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
      <div className="space-y-4">
        <h3 className="text-xl font-serif text-primary">Potkovice Service</h3>
        <div className="slider-container">
          <Slider
            value={[potkoviceValue]}
            onValueChange={onPotkoviceChange}
            max={5}
            min={1}
            step={1}
            className="w-full"
          />
          <div className="mt-2 text-sm text-gray-600">
            Selected level: {potkoviceValue}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-serif text-primary">Trening Service</h3>
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={treningSelected}
            onChange={(e) => onTreningChange(e.target.checked)}
            className="w-5 h-5 rounded border-secondary text-primary focus:ring-primary"
          />
          <span className="text-gray-700">Include Trening ($100)</span>
        </label>
      </div>
    </div>
  );
};

export default ServiceSelector;