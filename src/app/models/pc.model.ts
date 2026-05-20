export interface Pc {
  id: number;
  nom: string;
  prix: number;
  image: string;
  specs: {
    ram: number;
    cpu: string;
    cpuScore: number;
    ssd: number;
    gpu: string;
    gpuScore: number;
    ecran: number;
    autonomie: number;
    poids: number;
  };
  magasins: { nom: string; distance: string }[];
}