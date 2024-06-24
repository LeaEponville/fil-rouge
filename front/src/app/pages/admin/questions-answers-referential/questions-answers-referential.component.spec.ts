import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsAnswersReferentialComponent } from './questions-answers-referential.component';

describe('QuestionsAnswersReferentialComponent', () => {
  let component: QuestionsAnswersReferentialComponent;
  let fixture: ComponentFixture<QuestionsAnswersReferentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionsAnswersReferentialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsAnswersReferentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
