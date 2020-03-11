import { TestBed, async, inject } from '@angular/core/testing';

import { AdminEditBookGuard } from './admin-edit-book.guard';

describe('AdminEditBookGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminEditBookGuard]
    });
  });

  it('should ...', inject([AdminEditBookGuard], (guard: AdminEditBookGuard) => {
    expect(guard).toBeTruthy();
  }));
});
