import { Component, OnInit } from '@angular/core';
import { IBooks } from './books';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './book.service';

@Component({
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  pageTitle: string = "Book Details";
  book: IBooks;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe({
      next: book => {
        this.book = book;
      },
      error: err => this.errorMessage = err
    })
  }
  onBack(): void {
    this.router.navigate(['/books']);
  }
}