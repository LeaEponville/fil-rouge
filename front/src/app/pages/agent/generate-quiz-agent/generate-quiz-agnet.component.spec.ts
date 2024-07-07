import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateQuizAgentComponent } from './generate-quiz-agent.component';

describe('GenerateQuizAgentComponent', () => {
    let component: GenerateQuizAgentComponent;
  let fixture: ComponentFixture<GenerateQuizAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
            imports: [GenerateQuizAgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateQuizAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
