import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechQuizComponent } from './tech-quiz.component';

describe('TechQuizComponent', () => {
  let component: TechQuizComponent;
  let fixture: ComponentFixture<TechQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
