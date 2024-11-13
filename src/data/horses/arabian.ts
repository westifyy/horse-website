import { HorseBreed } from '../../types/horse';

export const arabian: HorseBreed = {
  name: 'Arabian',
  variants: [
    {
      name: 'Rose Grey Bay',
      basePrice: 1800,
      stats: { acceleration: 5, speed: 5, turning: 7 },
      imageUrl: '/src/assets/horses/arabian/rose-grey-bay.jpg'
    },
    {
      name: 'Black',
      basePrice: 1575,
      stats: { acceleration: 5, speed: 5, turning: 7 },
      imageUrl: '/src/assets/horses/arabian/black.jpg'
    },
    {
      name: 'White',
      basePrice: 1480,
      stats: { acceleration: 5, speed: 5, turning: 7 },
      imageUrl: '/src/assets/horses/arabian/white.jpg'
    },
    {
      name: 'Bay Arab',
      basePrice: 1460,
      stats: { acceleration: 5, speed: 5, turning: 7 },
      imageUrl: '/src/assets/horses/arabian/rose-grey-bay.jpg'
    },
    {
      name: 'Grey',
      basePrice: 1350,
      stats: { acceleration: 5, speed: 5, turning: 7 },
      imageUrl: '/src/assets/horses/arabian/white.jpg'
    },
    {
      name: 'Red White Chestnut',
      basePrice: 1200,
      stats: { acceleration: 3, speed: 4, turning: 7 },
      imageUrl: '/src/assets/horses/arabian/red-chestnut.jpg'
    },
    {
      name: 'Warped Brindle',
      basePrice: 675,
      stats: { acceleration: 3, speed: 5, turning: 7 },
      imageUrl: '/src/assets/horses/arabian/warped-brindle.jpg'
    },
    {
      name: 'Red Chestnut',
      basePrice: 480,
      stats: { acceleration: 3, speed: 4, turning: 7 },
      imageUrl: '/src/assets/horses/arabian/red-chestnut.jpg'
    }
  ]
};