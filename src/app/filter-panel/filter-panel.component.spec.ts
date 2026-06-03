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

  // Budget
  public prixMax: number = 3000;

  // RAM
  public ramOptions: { label: string; value: number; checked: boolean }[] = [
    { label: '8 Go', value: 8, checked: false },
    { label: '16 Go', value: 16, checked: true },
    { label: '32 Go', value: 32, checked: false },
    { label: '64 Go', value: 64, checked: false }
  ];

  // CPU
  public cpuOptions: { label: string; value: string; checked: boolean }[] = [
    { label: 'Peu importe', value: '', checked: true },
    { label: 'Intel Core i5', value: 'i5', checked: false },
    { label: 'Intel Core i7', value: 'i7', checked: false },
    { label: 'AMD Ryzen', value: 'ryzen', checked: false },
    { label: 'Apple Silicon', value: 'apple', checked: false }
  ];

  // SSD
  public ssdOptions: { label: string; value: number; checked: boolean }[] = [
    { label: '256 Go SSD', value: 256, checked: false },
    { label: '512 Go SSD', value: 512, checked: true },
    { label: '1 To SSD', value: 1000, checked: false },
    { label: '2 To SSD', value: 2000, checked: false }
  ];

  // GPU
  public gpuType: 'tous' | 'integree' | 'dediee' = 'tous';

  public ngOnInit(): void {
    this.emettreChangement();
  }

  public onPrixChange(): void {
    this.emettreChangement();
  }

  public onRamChange(): void {
    this.emettreChangement();
  }

  public onCpuChange(index: number): void {
    // Si "Peu importe" coché, décocher les autres
    if (index === 0) {
      this.cpuOptions.forEach((opt, i) => opt.checked = i === 0);
    } else {
      this.cpuOptions[0].checked = false;
      this.cpuOptions[index].checked = !this.cpuOptions[index].checked;
      // Si rien de coché, recocher "Peu importe"
      const auMoinsUn = this.cpuOptions.slice(1).some(o => o.checked);
      if (!auMoinsUn) this.cpuOptions[0].checked = true;
    }
    this.emettreChangement();
  }

  public onSsdChange(): void {
    this.emettreChangement();
  }

  public onGpuChange(): void {
    this.emettreChangement();
  }

  public reinitialiser(): void {
    this.prixMax = 3000;
    this.ramOptions.forEach(o => o.checked = o.value === 16);
    this.cpuOptions.forEach((o, i) => o.checked = i === 0);
    this.ssdOptions.forEach(o => o.checked = o.value === 512);
    this.gpuType = 'tous';
    this.emettreChangement();
  }

  private emettreChangement(): void {
    const ramMin = Math.min(
      ...this.ramOptions.filter(o => o.checked).map(o => o.value),
      9999
    );
    const ssdMin = Math.min(
      ...this.ssdOptions.filter(o => o.checked).map(o => o.value),
      9999
    );
    const cpus = this.cpuOptions[0].checked
      ? []
      : this.cpuOptions.filter(o => o.checked).map(o => o.value);

    const filtres: FiltresExpert = {
      ramMin: ramMin === 9999 ? 0 : ramMin,
      prixMax: this.prixMax,
      cpus,
      ssdMin: ssdMin === 9999 ? 0 : ssdMin,
      gpuType: this.gpuType
    };

    this.filtresChange.emit(filtres);
  }
}