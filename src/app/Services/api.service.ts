import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server_url = 'http://localhost:3300';

  constructor( private http: HttpClient ) { }

  // admin login api 
  adminLoginApi( data: any ) {
    return this.http.post(`${this.server_url}/admin/login`, data);
  }


  // add book api 
  addBookApi( data: any ) {
    return this.http.post(`${this.server_url}/addbook`, data);
  }

}
