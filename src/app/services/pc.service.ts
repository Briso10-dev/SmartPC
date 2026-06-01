import { Injectable } from '@angular/core';
import { Pc } from '../models/pc.model';
import { PC_CATALOGUE } from '../data/pc-catalogue';

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

  private readonly pcs: Pc[] = PC_CATALOGUE;

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
