import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerChipComponent } from './answer-chip.component';

describe('AnswerChipComponent', () => {
  let component: AnswerChipComponent;
  let fixture: ComponentFixture<AnswerChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnswerChipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
