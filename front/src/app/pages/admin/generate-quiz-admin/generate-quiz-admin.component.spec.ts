import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateQuizAdminComponent } from './generate-quiz-admin.component';

describe('GenerateQuizAdminComponent', () => {
  let component: GenerateQuizAdminComponent;
  let fixture: ComponentFixture<GenerateQuizAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateQuizAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateQuizAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
