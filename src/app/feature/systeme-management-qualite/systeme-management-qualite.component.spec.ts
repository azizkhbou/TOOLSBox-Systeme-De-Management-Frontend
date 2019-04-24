import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemeManagementQualiteComponent } from './systeme-management-qualite.component';

describe('SystemeManagementQualiteComponent', () => {
  let component: SystemeManagementQualiteComponent;
  let fixture: ComponentFixture<SystemeManagementQualiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemeManagementQualiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemeManagementQualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
