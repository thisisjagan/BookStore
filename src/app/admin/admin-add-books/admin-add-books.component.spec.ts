import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddBooksComponent } from './admin-add-books.component';

describe('AdminAddBooksComponent', () => {
  let component: AdminAddBooksComponent;
  let fixture: ComponentFixture<AdminAddBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
