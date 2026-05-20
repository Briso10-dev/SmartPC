import { Injectable } from '@angular/core';

import { PC_CATALOGUE } from '../data/pc-catalogue';
import { Pc } from '../models/pc.model';
import { UserProfile } from '../models/user-profile.model';

type Usage = 'jeux' | 'bureautique' | 'creation' | 'etudes';

type WeightKey = 'cpu' | 'ram' | 'gpu' | 'ssd' | 'autonomie' | 'poids';

type WeightMap = Record<WeightKey, number>;

const WEIGHTS_BY_USAGE: Record<Usage, WeightMap> = {
  jeux: { cpu: 3, ram: 2, gpu: 3, ssd: 0, autonomie: 0, poids: 0 },
  bureautique: { cpu: 1, ram: 1, gpu: 0, ssd: 2, autonomie: 1, poids: 1 },
  creation: { cpu: 2, ram: 3, gpu: 2, ssd: 2, autonomie: 0, poids: 0 },
  etudes: { cpu: 1, ram: 1, gpu: 0, ssd: 1, autonomie: 3, poids: 3 }
};

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  public selectionner(profile: UserProfile): Pc[] {
    const usage = profile.usage.toLowerCase() as Usage;
  const weights = WEIGHTS_BY_USAGE[usage] ?? WEIGHTS_BY_USAGE['bureautique'];

    let budget = profile.budget;
    let results = this.scoreAndFilter(PC_CATALOGUE, weights, budget);
    let attempts = 0;

    while (results.length === 0 && budget > 0 && attempts < 3) {
      budget = Math.round(budget * 1.1);
      results = this.scoreAndFilter(PC_CATALOGUE, weights, budget);
      attempts += 1;
    }

    return results;
  }

  public genererExplication(pc: Pc, profile: UserProfile): string {
    const usage = profile.usage.toLowerCase();

    switch (usage) {
      case 'jeux':
        return `Sa carte graphique ${pc.specs.gpu} et son processeur ${pc.specs.cpu} assurent de bonnes performances en jeu.`;
      case 'creation':
        return `Avec ${pc.specs.ram} Go de RAM et un processeur ${pc.specs.cpu}, il est a l'aise pour la creation et le multitache.`;
      case 'etudes':
        return `Son autonomie de ${pc.specs.autonomie}h et son poids de ${pc.specs.poids}kg sont pratiques pour les etudes et les deplacements.`;
      case 'bureautique':
      default:
        return `Son SSD de ${pc.specs.ssd} Go et son autonomie de ${pc.specs.autonomie}h garantissent un usage fluide au quotidien.`;
    }
  }

  private scoreAndFilter(catalogue: Pc[], weights: WeightMap, budget: number): Pc[] {
    return catalogue
      .filter((pc) => pc.prix <= budget)
      .map((pc) => ({
        pc,
        score: this.calculerScore(pc, weights)
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((item) => item.pc);
  }

  private calculerScore(pc: Pc, weights: WeightMap): number {
    return (
      pc.specs.cpuScore * weights.cpu +
      pc.specs.ram * weights.ram +
      pc.specs.gpuScore * weights.gpu +
      pc.specs.ssd * weights.ssd +
      pc.specs.autonomie * weights.autonomie +
      pc.specs.poids * weights.poids
    );
  }
}