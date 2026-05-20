import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Pc } from '../models/pc.model';

@Component({
  selector: 'app-pc-card',
  standalone: false,
  templateUrl: './pc-card.component.html',
  styleUrls: ['./pc-card.component.css']
})
export class PcCardComponent {
  @Input()
  public pc!: Pc;

  @Output()
  public pcSelectionne = new EventEmitter<Pc>();

  public voirDetail(): void {
    this.pcSelectionne.emit(this.pc);
  }

  public get specsResume(): string {
    return `${this.pc.specs.ram} Go · ${this.formatCpu(this.pc.specs.cpu)} · ${this.pc.specs.ssd} Go SSD`;
  }

  private formatCpu(cpu: string): string {
    const parts = cpu.split(' ');
    return parts.length >= 3 ? parts[2] : cpu;
  }
}