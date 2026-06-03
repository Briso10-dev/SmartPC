import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edu-tooltip',
  standalone: false,
  templateUrl: './edu-tooltip.component.html',
  styleUrls: ['./edu-tooltip.component.css']
})
export class EduTooltipComponent {
  @Input()
  public text: string = '';

}
