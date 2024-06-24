import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeQuizComponent } from './see-quiz.component';

describe('SeeQuizComponent', () => {
  let component: SeeQuizComponent;
  let fixture: ComponentFixture<SeeQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
