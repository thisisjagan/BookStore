import { Injectable } from '@angular/core';
import { IBooks } from './books';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BookService{
    private bookUrl: string = 'http://localhost:3004/books';
    constructor(private http: HttpClient){}
    getBooks(): Observable<IBooks[]> {
        return this.http.get<IBooks[]>(this.bookUrl).pipe(tap(data => console.log('All: ' + JSON.stringify(data))),catchError(this.handleError)
        );
    }

    getBook(id: number): Observable<IBooks>{
        return this.getBooks().pipe(map(books => books.filter(book => book.id === id)[0]),catchError(this.handleError));
    }

    addBook(book: IBooks):Observable<IBooks>{
        return this.http.post<IBooks>(this.bookUrl,book);
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}