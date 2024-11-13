export interface HorseVariant {
  name: string;
  basePrice: number;
  stats: {
    acceleration: number;
    speed: number;
    turning: number;
  };
  imageUrl: string;
}

export interface HorseBreed {
  name: string;
  variants: HorseVariant[];
}