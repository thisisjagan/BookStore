import { Component, OnInit, OnChanges } from '@angular/core';
import { IBooks } from './books';
import { BookService } from './book.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit, OnChanges {
  pageTitle: string = "Book List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  private _listFilter: string;
  books: IBooks[];
  filteredBooks: IBooks[];
  errorMessage: string;
  isLoggedIn: boolean;

  constructor(private bookService: BookService, private router: Router) {
    this.listFilter = '';
  }

  performFilter(listFilter: string): IBooks[] {
    listFilter = listFilter.toLocaleLowerCase();
    return this.books.filter((book: IBooks) =>
      book.title.toLocaleLowerCase().indexOf(listFilter) !== -1);
  }
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBooks = this.listFilter ? this.performFilter(this.listFilter) : this.books;
  }

  ngOnChanges(){
    this.setIsLoggedIn();
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: books => {
        this.books = books
        this.filteredBooks = this.books;
      },
      error: err => this.errorMessage = err
    });
    this.filteredBooks = this.books;
    this.setIsLoggedIn();
  }

  deleteBook(id: number){
    this.bookService.deleteBook(id).subscribe(() =>
        alert(id + ' has been deleted.'),
      err => this.errorMessage = err);
      this.books = this.books.filter(item => item.id != id);
      this.filteredBooks = this.books;
  }

  editBook(id: number){
    this.router.navigate(['/editBooks',id]);
  }

  private setIsLoggedIn() {
    if (sessionStorage.getItem("isLoggedIn") != undefined) {
      if (sessionStorage.getItem("isLoggedIn") === "true") {
        this.isLoggedIn = true;
      }
      else {
        this.isLoggedIn = false;
      }
    }
  }
}