import { Component, OnInit } from '@angular/core';
import { IBooks } from 'src/app/book/books';
import { BookService } from 'src/app/book/book.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './admin-add-books.component.html',
  styleUrls: ['./admin-add-books.component.css']
})
export class AdminAddBooksComponent implements OnInit {

  id: number;
  errorMessage: string;

  bookInfo: IBooks = {
    title: null,
    author: null,
    category: null,
    edition: null,
    isbn: null,
    longDescription: null,
    price: null,
    rating: null,
    shortDescription: null,
    thumbnailUrl: null
  };
  constructor(private bookService: BookService, private router: Router) { }

  onClick(): void {
    if (this.isValidData()) {
      this.bookService.addBook(this.bookInfo).subscribe(data => {
        this.id = data.id;
        alert('Record added with id: ' + this.id);
        this.router.navigate(['/books']);
      });
    } else{
      alert("All fields are mandatory.");
    }
  }

  isValidData(): boolean {
    if (this.bookInfo.author == null || this.bookInfo.category == null || this.bookInfo.edition == null || this.bookInfo.isbn == null ||
      this.bookInfo.longDescription == null || this.bookInfo.price == null || this.bookInfo.rating == null || this.bookInfo.shortDescription
      == null || this.bookInfo.thumbnailUrl == null || this.bookInfo.title == null){
        return false;
      } else
      {
        return true;
      }
  }

  ngOnInit() {
  }

}
