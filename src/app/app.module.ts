import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list.component';
import { StarComponent } from './shared/star.component';
import { BookDetailComponent } from './book/book-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { BookDetailGuard } from './book/book-detail.guard';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminAddBooksComponent } from './admin/admin-add-books/admin-add-books.component';
import { AdminAddBooksGuard } from './admin/admin-add-books/admin-add-books.guard';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    StarComponent,
    BookDetailComponent,
    WelcomeComponent,
    AdminLoginComponent,
    AdminAddBooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'books', component: BookListComponent },
      {
        path: 'books/:id',
        canActivate: [BookDetailGuard],
        component: BookDetailComponent
      },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'adminLogin', component: AdminLoginComponent },
      {
        path: 'addBooks',
        canActivate: [AdminAddBooksGuard],
        component: AdminAddBooksComponent
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
