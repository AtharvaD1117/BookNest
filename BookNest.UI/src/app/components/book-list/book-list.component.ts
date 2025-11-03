import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Book {
  title: string;
  author: string;
  year: number;
}

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[] = [
    { title: 'Clean Code', author: 'Robert C. Martin', year: 2008 },
    { title: 'The Pragmatic Programmer', author: 'Andrew Hunt', year: 1999 },
    { title: 'You Don’t Know JS', author: 'Kyle Simpson', year: 2015 },
    { title: 'Refactoring', author: 'Martin Fowler', year: 1999 }
  ];
}
