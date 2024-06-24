import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTechnoComponent } from './edit-techno.component';

describe('EditTechnoComponent', () => {
  let component: EditTechnoComponent;
  let fixture: ComponentFixture<EditTechnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTechnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTechnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
