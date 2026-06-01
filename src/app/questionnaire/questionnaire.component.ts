import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppMode, ModeService } from '../services/mode.service';
import { UserProfile } from '../models/user-profile.model';

@Component({
  selector: 'app-questionnaire',
  standalone: false,
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent {

  public step: number = 1;
  public mode: AppMode = 'simple';

  public userProfile: UserProfile = {
    usage: '',
    budget: 0,
    mobilite: '',
    logiciels: []
  };

  public usageOptions = [
    { label: 'Bureautique', value: 'bureautique' },
    { label: 'Jeux video', value: 'jeux' },
    { label: 'Creation', value: 'creation' },
    { label: 'Etudes', value: 'etudes' }
  ];

  public budgetOptions = [
    { label: 'Moins de 600€', value: 600 },
    { label: '600€ – 1000€', value: 1000 },
    { label: 'Plus de 1000€', value: 1500 }
  ];

  public mobiliteOptions = [
    { label: 'Oui, tous les jours', value: 'fort' },
    { label: 'Parfois', value: 'moyen' },
    { label: 'Non, bureau fixe', value: 'faible' }
  ];

  public tooltipUsage =
    "Ton usage determine la puissance du processeur (CPU). Jeux video = CPU puissant, bureautique = CPU basique suffit.";
  public tooltipBudget =
    "Le budget determine la gamme de composants accessibles. Un bon SSD NVMe coute ~80€ de plus mais est 5x plus rapide.";
  public tooltipMobilite =
    "La mobilite impacte l'autonomie et le poids. Ultrabook (~1.2kg, 12h) vs laptop gaming (~2.5kg, 3h).";

  public constructor(private router: Router, private modeService: ModeService) {
    this.mode = this.modeService.getMode();
  }

  public selectUsage(value: string): void {
    this.userProfile.usage = value;
  }

  public selectBudget(value: number): void {
    this.userProfile.budget = value;
  }

  public selectMobilite(value: string): void {
    this.userProfile.mobilite = value;
  }

  public canGoNext(): boolean {
    if (this.step === 1) return this.userProfile.usage !== '';
    if (this.step === 2) return this.userProfile.budget > 0;
    return this.userProfile.mobilite !== '';
  }

  public next(): void {
    if (!this.canGoNext()) return;
    if (this.step < 3) {
      this.step += 1;
      return;
    }

    this.router.navigate(['/resultats'], {
      state: { profile: this.userProfile, mode: this.mode }
    });
  }

  public prev(): void {
    if (this.step > 1) this.step -= 1;
  }
}
