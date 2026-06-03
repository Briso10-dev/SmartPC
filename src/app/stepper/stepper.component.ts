import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  standalone: false,
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  @Input() public total: number = 4;
  @Input() public current: number = 1;

  public get steps(): number[] {
    return Array.from({ length: this.total }, (_, i) => i + 1);
  }

  public isActive(step: number): boolean {
    return step === this.current;
  }

  public isComplete(step: number): boolean {
    return step < this.current;
  }
}