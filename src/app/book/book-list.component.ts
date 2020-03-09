import { Component, OnInit } from '@angular/core';
import { IBooks } from './books';
import { BookService } from './book.service';

@Component({
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit{
  pageTitle: string = "Book List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  private _listFilter: string;
  books: IBooks[];
  filteredBooks: IBooks[];
  errorMessage: string;

  constructor(private bookService: BookService){
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

  ngOnInit():void {
    this.bookService.getBooks().subscribe({
      next: books => {
        this.books = books
        this.filteredBooks = this.books;
      },
      error: err => this.errorMessage = err
    });
    this.filteredBooks = this.books;
  }
}