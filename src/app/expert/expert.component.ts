import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pc } from '../models/pc.model';
import { FiltresExpert, PcService } from '../services/pc.service';

@Component({
  selector: 'app-expert',
  standalone: false,
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.css']
})
export class ExpertComponent {

  public pcsFiltres: Pc[] = [];

  constructor(private pcService: PcService, private router: Router) {
    this.pcsFiltres = this.pcService.getAllPcs();
  }

  public onFiltresChange(filtres: FiltresExpert): void {
    this.pcsFiltres = this.pcService.filtrer(filtres);
  }

  public onPcSelectionne(pc: Pc): void {
    this.router.navigate(['/resultats'], {
      state: {
        mode: 'expert',
        profile: {
          usage: 'bureautique',
          budget: pc.prix,
          mobilite: 'moyenne',
          logiciels: []
        }
      }
    });
  }
}