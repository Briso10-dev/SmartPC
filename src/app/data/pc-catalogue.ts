import { Pc } from '../models/pc.model';

export const PC_CATALOGUE: Pc[] = [
  {
    id: 1,
    nom: 'Dell XPS 13',
    prix: 1149,
    image: 'assets/pcs/dell-xps-13.jpg',
    specs: {
      ram: 16,
      cpu: 'Intel Core i7-1355U',
      cpuScore: 8.5,
      ssd: 1000,
      gpu: 'Intel Iris Xe',
      gpuScore: 4.5,
      ecran: 13.4,
      autonomie: 12,
      poids: 1.2
    },
    magasins: [
      { nom: 'Fnac Le Mans', distance: '2,1km' },
      { nom: 'Boulanger', distance: '4,8km' }
    ]
  },
  {
    id: 2,
    nom: 'Asus TUF Gaming A15',
    prix: 1299,
    image: 'assets/pcs/asus-tuf-a15.jpg',
    specs: {
      ram: 16,
      cpu: 'AMD Ryzen 7 7735HS',
      cpuScore: 8.8,
      ssd: 1000,
      gpu: 'NVIDIA RTX 4060',
      gpuScore: 9.0,
      ecran: 15.6,
      autonomie: 7,
      poids: 2.2
    },
    magasins: [
      { nom: 'Darty', distance: '3,4km' },
      { nom: 'Fnac', distance: '5,0km' }
    ]
  },
  {
    id: 3,
    nom: 'Lenovo IdeaPad Slim 5',
    prix: 749,
    image: 'assets/pcs/lenovo-ideapad-slim-5.jpg',
    specs: {
      ram: 8,
      cpu: 'Intel Core i5-1335U',
      cpuScore: 6.5,
      ssd: 512,
      gpu: 'Intel Iris Xe',
      gpuScore: 4.0,
      ecran: 14.0,
      autonomie: 10,
      poids: 1.4
    },
    magasins: [
      { nom: 'Fnac', distance: '1,8km' },
      { nom: 'Boulanger', distance: '3,2km' }
    ]
  },
  {
    id: 4,
    nom: 'HP Pavilion 15',
    prix: 599,
    image: 'assets/pcs/hp-pavilion-15.jpg',
    specs: {
      ram: 8,
      cpu: 'AMD Ryzen 5 7520U',
      cpuScore: 5.5,
      ssd: 512,
      gpu: 'Radeon 610M',
      gpuScore: 3.0,
      ecran: 15.6,
      autonomie: 8,
      poids: 1.7
    },
    magasins: [
      { nom: 'Carrefour', distance: '2,9km' },
      { nom: 'Darty', distance: '6,1km' }
    ]
  },
  {
    id: 5,
    nom: 'Apple MacBook Air M2',
    prix: 1399,
    image: 'assets/pcs/macbook-air-m2.jpg',
    specs: {
      ram: 16,
      cpu: 'Apple M2',
      cpuScore: 8.0,
      ssd: 512,
      gpu: 'Apple M2 GPU',
      gpuScore: 7.0,
      ecran: 13.6,
      autonomie: 15,
      poids: 1.24
    },
    magasins: [
      { nom: 'Apple Store', distance: '7,2km' },
      { nom: 'Fnac', distance: '3,9km' }
    ]
  },
  {
    id: 6,
    nom: 'Acer Swift 3',
    prix: 699,
    image: 'assets/pcs/acer-swift-3.jpg',
    specs: {
      ram: 16,
      cpu: 'Intel Core i5-1240P',
      cpuScore: 7.0,
      ssd: 512,
      gpu: 'Intel Iris Xe',
      gpuScore: 4.0,
      ecran: 14.0,
      autonomie: 11,
      poids: 1.25
    },
    magasins: [
      { nom: 'Boulanger', distance: '2,6km' },
      { nom: 'Darty', distance: '4,1km' }
    ]
  }
];