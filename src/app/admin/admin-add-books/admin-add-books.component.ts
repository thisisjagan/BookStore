import { Component, OnInit } from '@angular/core';
import { IBooks } from 'src/app/book/books';
import { BookService } from 'src/app/book/book.service';

@Component({
  templateUrl: './admin-add-books.component.html',
  styleUrls: ['./admin-add-books.component.css']
})
export class AdminAddBooksComponent implements OnInit {

  id: number;
  errorMessage: string;
  
  bookInfo: IBooks;
  constructor(private bookService: BookService) { }

  onClick(): void {
    this.bookService.addBook(this.bookInfo).subscribe(data => {
      this.id = data.id;
      alert('Record added with id: ' + this.id);
    });
  }

  ngOnInit() {
  }

}
