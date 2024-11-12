import { HorseBreed } from '../types/horse';

export const horses: HorseBreed[] = [
  {
    name: 'Arabian',
    variants: [
      {
        name: 'Rose Grey Bay',
        basePrice: 1800,
        stats: { acceleration: 5, speed: 5, turning: 7 }
      },
      {
        name: 'Black',
        basePrice: 1575,
        stats: { acceleration: 5, speed: 5, turning: 7 }
      },
      {
        name: 'White',
        basePrice: 1480,
        stats: { acceleration: 5, speed: 5, turning: 7 }
      },
      {
        name: 'Bay Arab',
        basePrice: 1460,
        stats: { acceleration: 5, speed: 5, turning: 7 }
      },
      {
        name: 'Grey',
        basePrice: 1350,
        stats: { acceleration: 5, speed: 5, turning: 7 }
      },
      {
        name: 'Red White Chestnut',
        basePrice: 1200,
        stats: { acceleration: 3, speed: 4, turning: 7 }
      },
      {
        name: 'Warped Brindle',
        basePrice: 675,
        stats: { acceleration: 3, speed: 5, turning: 7 }
      },
      {
        name: 'Red Chestnut',
        basePrice: 480,
        stats: { acceleration: 3, speed: 4, turning: 7 }
      }
    ]
  },
  {
    name: 'Missouri Fox Trotter',
    variants: [
      {
        name: 'Blue',
        basePrice: 1650,
        stats: { acceleration: 4, speed: 6, turning: 3 }
      },
      {
        name: 'Black Tovero',
        basePrice: 1650,
        stats: { acceleration: 4, speed: 6, turning: 3 }
      },
      {
        name: 'Dapple Grey',
        basePrice: 1650,
        stats: { acceleration: 4, speed: 6, turning: 3 }
      },
      {
        name: 'Buck Skin',
        basePrice: 1650,
        stats: { acceleration: 4, speed: 6, turning: 3 }
      },
      {
        name: 'Sable Champagne',
        basePrice: 1425,
        stats: { acceleration: 4, speed: 6, turning: 3 }
      },
      {
        name: 'Silver Dapple Pinto',
        basePrice: 1425,
        stats: { acceleration: 4, speed: 6, turning: 3 }
      }
    ]
  },
  // ... Add all other breeds similarly
];