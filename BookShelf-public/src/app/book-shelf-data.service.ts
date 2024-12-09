import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './home-list/home-list.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookShelfDataService {

  constructor(private http: HttpClient) { }
  private apiBaseUrl = 'http://localhost:3000/api/';


  public getBooks(): Observable<Book[]> {
    const url: string = `${this.apiBaseUrl}books`;
    return this.http.get<Book[]>(url);
  }
}

  



