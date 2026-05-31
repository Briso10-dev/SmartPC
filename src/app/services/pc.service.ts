import { Injectable } from '@angular/core';
import { Pc } from '../models/pc.model';

export interface FiltresExpert {
  ramMin: number;
  prixMax: number;
  cpus: string[];
  ssdMin: number;
  gpuType: 'tous' | 'integree' | 'dediee';
}

@Injectable({
  providedIn: 'root'
})
export class PcService {

  private readonly pcs: Pc[] = [
    {
      id: 1,
      nom: 'Dell XPS 8950',
      prix: 1199,
      image: 'assets/images/dell-xps.jpg',
      specs: {
        ram: 16, cpu: 'Intel Core i7-12700', cpuScore: 85,
        ssd: 512, gpu: 'Intel UHD 770', gpuScore: 20,
        ecran: 0, autonomie: 0, poids: 7.5
      },
      magasins: [
        { nom: 'Fnac Rivoli', distance: '1.2 km' },
        { nom: 'Amazon (livraison)', distance: 'En ligne' }
      ]
    },
    {
      id: 2,
      nom: 'HP EliteDesk 800 G9',
      prix: 899,
      image: 'assets/images/hp-elitedesk.jpg',
      specs: {
        ram: 16, cpu: 'Intel Core i5-12500', cpuScore: 72,
        ssd: 512, gpu: 'Intel UHD 730', gpuScore: 18,
        ecran: 0, autonomie: 0, poids: 6.2
      },
      magasins: [
        { nom: 'Fnac Nation', distance: '2.4 km' },
        { nom: 'Boulanger Beaugrenelle', distance: '3.8 km' }
      ]
    },
    {
      id: 3,
      nom: 'Lenovo ThinkCentre M90q',
      prix: 1099,
      image: 'assets/images/lenovo-thinkcentre.jpg',
      specs: {
        ram: 16, cpu: 'Intel Core i7-12700T', cpuScore: 80,
        ssd: 512, gpu: 'Intel UHD 770', gpuScore: 20,
        ecran: 0, autonomie: 0, poids: 1.4
      },
      magasins: [
        { nom: 'Cdiscount (livraison)', distance: 'En ligne' },
        { nom: 'Darty Nation', distance: '5.1 km' }
      ]
    },
    {
      id: 4,
      nom: 'ASUS ROG Strix G35CZ',
      prix: 1749,
      image: 'assets/images/asus-rog.jpg',
      specs: {
        ram: 32, cpu: 'Intel Core i7-13700KF', cpuScore: 92,
        ssd: 1000, gpu: 'NVIDIA RTX 3060', gpuScore: 75,
        ecran: 0, autonomie: 0, poids: 9.8
      },
      magasins: [
        { nom: 'Fnac Rivoli', distance: '1.2 km' },
        { nom: 'Boulanger Beaugrenelle', distance: '3.8 km' }
      ]
    },
    {
      id: 5,
      nom: 'HP Omen 45L',
      prix: 1549,
      image: 'assets/images/hp-omen.jpg',
      specs: {
        ram: 32, cpu: 'Intel Core i7-13700K', cpuScore: 90,
        ssd: 1000, gpu: 'NVIDIA RTX 3060', gpuScore: 75,
        ecran: 0, autonomie: 0, poids: 16
      },
      magasins: [
        { nom: 'Darty Nation', distance: '5.1 km' }
      ]
    },
    {
      id: 6,
      nom: 'Lenovo Legion Tower 5i',
      prix: 879,
      image: 'assets/images/lenovo-legion.jpg',
      specs: {
        ram: 16, cpu: 'Intel Core i5-13400F', cpuScore: 78,
        ssd: 512, gpu: 'NVIDIA RTX 3060', gpuScore: 75,
        ecran: 0, autonomie: 0, poids: 10.5
      },
      magasins: [
        { nom: 'Cdiscount (livraison)', distance: 'En ligne' }
      ]
    },
    {
      id: 7,
      nom: 'Apple Mac Mini M3',
      prix: 699,
      image: 'assets/images/mac-mini.jpg',
      specs: {
        ram: 8, cpu: 'Apple M3', cpuScore: 88,
        ssd: 256, gpu: 'Apple GPU 10 cœurs', gpuScore: 60,
        ecran: 0, autonomie: 0, poids: 0.7
      },
      magasins: [
        { nom: 'Apple Store Opéra', distance: '0.8 km' },
        { nom: 'Fnac Rivoli', distance: '1.2 km' }
      ]
    },
    {
      id: 8,
      nom: 'AMD Ryzen 7 7700X Custom',
      prix: 1350,
      image: 'assets/images/amd-custom.jpg',
      specs: {
        ram: 32, cpu: 'AMD Ryzen 7 7700X', cpuScore: 91,
        ssd: 1000, gpu: 'AMD Radeon RX 7600', gpuScore: 68,
        ecran: 0, autonomie: 0, poids: 8
      },
      magasins: [
        { nom: 'LDLC (livraison)', distance: 'En ligne' }
      ]
    }
  ];

  public getAllPcs(): Pc[] {
    return this.pcs;
  }

  public filtrer(filtres: FiltresExpert): Pc[] {
    return this.pcs.filter(pc => {
      // RAM
      if (pc.specs.ram < filtres.ramMin) return false;

      // Prix
      if (pc.prix > filtres.prixMax) return false;

      // SSD
      if (pc.specs.ssd < filtres.ssdMin) return false;

      // CPU
      if (filtres.cpus.length > 0) {
        const cpuLower = pc.specs.cpu.toLowerCase();
        const match = filtres.cpus.some(c => cpuLower.includes(c.toLowerCase()));
        if (!match) return false;
      }

      // GPU
      if (filtres.gpuType === 'integree') {
        const gpuLower = pc.specs.gpu.toLowerCase();
        if (gpuLower.includes('nvidia') || gpuLower.includes('radeon') || gpuLower.includes('rtx') || gpuLower.includes('rx ')) return false;
      } else if (filtres.gpuType === 'dediee') {
        const gpuLower = pc.specs.gpu.toLowerCase();
        if (!gpuLower.includes('nvidia') && !gpuLower.includes('radeon') && !gpuLower.includes('rtx') && !gpuLower.includes('rx ')) return false;
      }

      return true;
    });
  }
}
