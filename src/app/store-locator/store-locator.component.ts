import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-store-locator',
  standalone: false,
  templateUrl: './store-locator.component.html',
  styleUrls: ['./store-locator.component.css']
})
export class StoreLocatorComponent {
  @Input()
  public magasins: { nom: string; distance: string }[] = [];
}