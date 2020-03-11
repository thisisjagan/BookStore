import { OnInit, Component } from '@angular/core';
import { BookService } from 'src/app/book/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IBooks } from 'src/app/book/books';

@Component({
  templateUrl: './admin-edit-book.component.html',
  styleUrls: ['./admin-edit-book.component.css']
})

export class AdminEditBooksComponent implements OnInit {

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

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) { }

  onClick(id: number): void {
    if (this.isValidData()) {
      this.bookService.editBook(id, this.bookInfo).subscribe(data => {
        id = data.id;
        alert('Record with id: ' + id + ' updated.');
        this.router.navigate(['/books']);
      });
    } else {
      alert("All fields are mandatory.");
    }
  }

  isValidData(): boolean {
    if (this.isEmpty(this.bookInfo.author) || this.isEmpty(this.bookInfo.category) || this.isEmpty(this.bookInfo.edition) ||
      this.isEmpty(this.bookInfo.isbn) ||
      this.isEmpty(this.bookInfo.longDescription) || this.isEmpty(this.bookInfo.price) || this.isEmpty(this.bookInfo.rating) ||
      this.isEmpty(this.bookInfo.shortDescription) || this.isEmpty(this.bookInfo.thumbnailUrl) || this.isEmpty(this.bookInfo.title)) {
      return false;
    } else {
      return true;
    }
  }

  isEmpty(str: any) {
    return (!str || 0 === str.length);
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe({
      next: book => {
        this.bookInfo = book;
      },
      error: err => this.errorMessage = err
    })
  }
  onBack(): void {
    this.router.navigate(['/books']);
  }
}