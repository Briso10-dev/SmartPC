import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeService, AppMode } from '../services/mode.service';
import { UserProfile } from '../models/user-profile.model';

@Component({
  selector: 'app-questionnaire',
  standalone: false,
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  public currentStep: number = 1;
  public mode: AppMode = 'simple';

  public userProfile: UserProfile = {
    usage: '',
    budget: 1000,
    mobilite: '',
    logiciels: []
  };

  public usageOptions = [
    { label: 'Jeux vidéo',        value: 'jeux' },
    { label: 'Graphisme',         value: 'creation' },
    { label: 'Programmation',     value: 'bureautique' },
    { label: 'Bureautique',       value: 'bureautique' },
    { label: 'Modél. 3D',         value: 'creation' },
    { label: 'Vidéo / Streaming', value: 'creation' }
  ];

  public mobiliteOptions = [
    { label: 'Portable', value: 'fort' },
    { label: 'Fixe',     value: 'faible' }
  ];

  public logicielsOptions = [
    { label: 'Office / Word',    value: 'office' },
    { label: 'Photoshop',        value: 'photoshop' },
    { label: 'Visual Studio',    value: 'vscode' },
    { label: 'Blender',          value: 'blender' },
    { label: 'Premiere Pro',     value: 'premiere' },
    { label: 'Navigateur web',   value: 'web' }
  ];

  public tooltips = {
    usage:    'Ton usage détermine la puissance du processeur (CPU). Jeux vidéo = CPU puissant, bureautique = CPU basique suffit.',
    budget:   "Il s'agit d'un budget indicatif. Un bon SSD NVMe coûte ~80€ de plus mais est 5× plus rapide.",
    mobilite: 'Un portable est très mobile mais peu modulable. Un fixe offre plus de puissance pour le même budget.',
    logiciels:'Les logiciels lourds (Blender, Premiere) demandent plus de RAM et un GPU dédié.'
  };

  constructor(
    private readonly router: Router,
    private readonly modeService: ModeService
  ) {}

  public ngOnInit(): void {
    this.mode = this.modeService.getMode();
  }

  public get budgetWarning(): string {
    const highDemand = ['jeux', 'creation'];
    if (highDemand.includes(this.userProfile.usage) && this.userProfile.budget < 800) {
      return `Attention : ce budget peut être insuffisant pour un usage "${this.userProfile.usage}".`;
    }
    return '';
  }

  public isLogicielSelected(value: string): boolean {
    return this.userProfile.logiciels.includes(value);
  }

  public toggleLogiciel(value: string): void {
    const idx = this.userProfile.logiciels.indexOf(value);
    if (idx === -1) {
      this.userProfile.logiciels = [...this.userProfile.logiciels, value];
    } else {
      this.userProfile.logiciels = this.userProfile.logiciels.filter(v => v !== value);
    }
  }

  public canProceed(): boolean {
    switch (this.currentStep) {
      case 1: return this.userProfile.usage !== '';
      case 2: return this.userProfile.budget > 0;
      case 3: return this.userProfile.mobilite !== '';
      case 4: return true;
      default: return false;
    }
  }

  public suivant(): void {
    if (!this.canProceed()) return;
    if (this.currentStep < 4) {
      this.currentStep++;
    } else {
      this.router.navigate(['/resultats'], {
        state: { profile: this.userProfile }
      });
    }
  }

  public retour(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}