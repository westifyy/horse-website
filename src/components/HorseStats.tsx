import React from 'react';
import { Progress } from "@/components/ui/progress";

interface HorseStatsProps {
  acceleration: number;
  speed: number;
  turning: number;
}

const HorseStats: React.FC<HorseStatsProps> = ({
  acceleration,
  speed,
  turning
}) => {
  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow-md">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Acceleration (Ubrzanje)</span>
          <span className="text-sm text-gray-500">{acceleration}/10</span>
        </div>
        <Progress value={acceleration * 10} className="h-2" />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Speed (Brzina)</span>
          <span className="text-sm text-gray-500">{speed}/10</span>
        </div>
        <Progress value={speed * 10} className="h-2" />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Turning (Skretanje)</span>
          <span className="text-sm text-gray-500">{turning}/10</span>
        </div>
        <Progress value={turning * 10} className="h-2" />
      </div>
    </div>
  );
};

export default HorseStats;