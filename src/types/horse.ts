export interface HorseVariant {
  name: string;
  basePrice: number;
  stats: {
    acceleration: number;
    speed: number;
    turning: number;
  };
}

export interface HorseBreed {
  name: string;
  variants: HorseVariant[];
}