import { Component } from '@angular/core';
import { BookShelfDataService } from '../book-shelf-data.service';

@Component({
  selector: 'app-home-list',
  standalone: false,
  
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.css',
  providers: [BookShelfDataService]
})
export class HomeListComponent {
  constructor(private bookShelfDataService: BookShelfDataService) { }
  books!: Book[];
  private getBooks(): void {
    this.bookShelfDataService
    .getBooks()
    .subscribe({
      next: (foundBooks) => {
        this.books = foundBooks;
      },
      error: (error) => {
        console.error('Error fetching books:', error);
      }
    });
    }
  ngOnInit() {
    this.getBooks();
   } 
}

export class Book {
  bookName!: string; 
  author!: string;
  synopsis!: string;
  Genres!: string[];
}