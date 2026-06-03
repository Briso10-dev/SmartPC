import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModeService, AppMode } from '../services/mode.service';

@Component({
  selector: 'app-accueil',
  standalone: false,
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  public modeSelectionne: AppMode = 'guided';

  constructor(private router: Router, private modeService: ModeService) {}

  public selectionner(mode: AppMode): void {
    this.modeSelectionne = mode;
  }

  public commencer(): void {
    this.modeService.setMode(this.modeSelectionne);
    if (this.modeSelectionne === 'expert') {
      this.router.navigate(['/expert']);
    } else {
      this.router.navigate(['/questionnaire']);
    }
  }
}