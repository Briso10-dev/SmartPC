import { Component } from '@angular/core';
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

  constructor(private pcService: PcService) {
    this.pcsFiltres = this.pcService.getAllPcs();
  }

  public onFiltresChange(filtres: FiltresExpert): void {
    this.pcsFiltres = this.pcService.filtrer(filtres);
  }

  public onPcSelectionne(pc: Pc): void {
    // Navigation vers la page résultats — à connecter avec le router
    console.log('PC sélectionné :', pc);
  }
}
