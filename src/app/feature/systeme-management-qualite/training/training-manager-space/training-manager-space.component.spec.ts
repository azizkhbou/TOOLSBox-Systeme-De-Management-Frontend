import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingManagerSpaceComponent } from './training-manager-space.component';

describe('TrainingManagerSpaceComponent', () => {
  let component: TrainingManagerSpaceComponent;
  let fixture: ComponentFixture<TrainingManagerSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingManagerSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingManagerSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
