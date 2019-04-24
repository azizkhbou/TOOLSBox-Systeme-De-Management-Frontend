import { TestBed, async, inject } from '@angular/core/testing';

import { SystemeManagementQualiteGuard } from './systeme-management-qualite.guard';

describe('SystemeManagementQualiteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemeManagementQualiteGuard]
    });
  });

  it('should ...', inject([SystemeManagementQualiteGuard], (guard: SystemeManagementQualiteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
