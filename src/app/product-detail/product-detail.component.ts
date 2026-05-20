import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Pc } from '../models/pc.model';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input()
  public pc!: Pc;

  @Output()
  public retour = new EventEmitter<void>();

  public revenir(): void {
    this.retour.emit();
  }
}