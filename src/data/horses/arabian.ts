import { HorseBreed } from '../../types/horse';

export const arabian: HorseBreed = {
  name: 'Arabian',
  variants: [
    {
      name: 'Rose Grey Bay',
      basePrice: 1800,
      stats: { acceleration: 5, speed: 5, turning: 7 },
      imageUrl: 'https://static.wikia.nocookie.net/reddeadredemption/images/3/3c/RDR2_Arabian_Rose_Grey_Bay.jpg'
    },
    {
      name: 'Black',
      basePrice: 1575,
      stats: { acceleration: 5, speed: 5, turning: 7 },
      imageUrl: 'https://static.wikia.nocookie.net/reddeadredemption/images/4/41/RDR2_Arabian_Black.jpg'
    },
    {
      name: 'White',
      basePrice: 1480,
      stats: { acceleration: 5, speed: 5, turning: 7 },
      imageUrl: 'https://static.wikia.nocookie.net/reddeadredemption/images/5/5c/RDR2_Arabian_White.jpg'
    },
    {
      name: 'Bay Arab',
      basePrice: 1460,
      stats: { acceleration: 5, speed: 5, turning: 7 },
      imageUrl: 'https://static.wikia.nocookie.net/reddeadredemption/images/3/3c/RDR2_Arabian_Rose_Grey_Bay.jpg'
    },
    {
      name: 'Grey',
      basePrice: 1350,
      stats: { acceleration: 5, speed: 5, turning: 7 },
      imageUrl: 'https://static.wikia.nocookie.net/reddeadredemption/images/5/5c/RDR2_Arabian_White.jpg'
    },
    {
      name: 'Red White Chestnut',
      basePrice: 1200,
      stats: { acceleration: 3, speed: 4, turning: 7 },
      imageUrl: 'https://static.wikia.nocookie.net/reddeadredemption/images/d/d8/RDR2_Arabian_Red_Chestnut.jpg'
    },
    {
      name: 'Warped Brindle',
      basePrice: 675,
      stats: { acceleration: 3, speed: 5, turning: 7 },
      imageUrl: 'https://static.wikia.nocookie.net/reddeadredemption/images/d/d7/RDR2_Arabian_Warped_Brindle.jpg'
    },
    {
      name: 'Red Chestnut',
      basePrice: 480,
      stats: { acceleration: 3, speed: 4, turning: 7 },
      imageUrl: 'https://static.wikia.nocookie.net/reddeadredemption/images/d/d8/RDR2_Arabian_Red_Chestnut.jpg'
    }
  ]
};