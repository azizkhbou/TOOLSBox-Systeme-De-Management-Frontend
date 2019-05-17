import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNeedComponent } from './delete-need.component';

describe('DeleteNeedComponent', () => {
  let component: DeleteNeedComponent;
  let fixture: ComponentFixture<DeleteNeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteNeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
