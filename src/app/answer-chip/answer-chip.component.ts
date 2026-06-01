import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-answer-chip',
  standalone: false,
  templateUrl: './answer-chip.component.html',
  styleUrls: ['./answer-chip.component.css']
})
export class AnswerChipComponent {
  @Input()
  public label: string = '';

  @Input()
  public selected: boolean = false;

  @Output()
  public selectionChange = new EventEmitter<void>();

  public toggle(): void {
    this.selectionChange.emit();
  }

}
