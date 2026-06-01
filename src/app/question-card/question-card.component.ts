import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-card',
  standalone: false,
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent {

  @Input()
  public title: string = '';

  @Input()
  public tooltip: string = '';

  @Input()
  public mode: 'simple' | 'guided' | 'expert' = 'simple';
}
