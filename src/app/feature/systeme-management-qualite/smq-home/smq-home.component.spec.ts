import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmqHomeComponent } from './smq-home.component';

describe('SmqHomeComponent', () => {
  let component: SmqHomeComponent;
  let fixture: ComponentFixture<SmqHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmqHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmqHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
