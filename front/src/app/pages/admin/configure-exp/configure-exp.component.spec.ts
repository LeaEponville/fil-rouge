import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureExpComponent } from './configure-exp.component';

describe('ConfigureExpComponent', () => {
  let component: ConfigureExpComponent;
  let fixture: ComponentFixture<ConfigureExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigureExpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigureExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
