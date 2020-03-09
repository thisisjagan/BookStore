import { TestBed, async, inject } from '@angular/core/testing';

import { AdminAddBooksGuard } from './admin-add-books.guard';

describe('AdminAddBooksGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAddBooksGuard]
    });
  });

  it('should ...', inject([AdminAddBooksGuard], (guard: AdminAddBooksGuard) => {
    expect(guard).toBeTruthy();
  }));
});
