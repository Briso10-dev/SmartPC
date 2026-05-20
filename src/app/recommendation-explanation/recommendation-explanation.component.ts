import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recommendation-explanation',
  standalone: false,
  templateUrl: './recommendation-explanation.component.html',
  styleUrls: ['./recommendation-explanation.component.css']
})
export class RecommendationExplanationComponent {
  @Input()
  public explication: string = '';
}