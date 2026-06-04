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

  constructor(private router: Router, private modeService: ModeService) {}

  public choisirMode(mode: AppMode): void {
    this.modeService.setMode(mode);
    if (mode === 'expert') {
      this.router.navigate(['/expert']);
    } else {
      this.router.navigate(['/questionnaire']);
    }
  }
}