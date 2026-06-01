import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FiltresExpert } from '../services/pc.service';

@Component({
  selector: 'app-filter-panel',
  standalone: false,
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.css']
})
export class FilterPanelComponent implements OnInit {

  @Output()
  public filtresChange = new EventEmitter<FiltresExpert>();

  public prixMax: number = 3000;
  public ramMin: number = 8;
  public ssdMin: number = 256;
  public cpu: string = '';
  public gpuType: 'tous' | 'integree' | 'dediee' = 'tous';

  public ngOnInit(): void {
    this.emettreChangement();
  }

  public onChange(): void {
    this.emettreChangement();
  }

  public reinitialiser(): void {
    this.prixMax = 3000;
    this.ramMin = 8;
    this.ssdMin = 256;
    this.cpu = '';
    this.gpuType = 'tous';
    this.emettreChangement();
  }

  private emettreChangement(): void {
    this.filtresChange.emit({
      ramMin: this.ramMin,
      prixMax: this.prixMax,
      cpus: this.cpu === '' ? [] : [this.cpu],
      ssdMin: this.ssdMin,
      gpuType: this.gpuType
    });
  }
}