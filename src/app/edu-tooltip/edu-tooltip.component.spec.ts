import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduTooltipComponent } from './edu-tooltip.component';

describe('EduTooltipComponent', () => {
  let component: EduTooltipComponent;
  let fixture: ComponentFixture<EduTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EduTooltipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
