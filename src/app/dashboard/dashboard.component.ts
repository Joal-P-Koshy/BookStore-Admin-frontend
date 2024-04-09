import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  allBooks: any = [];

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(){
    this.api.getAllBooksApi().subscribe({
      next: (res: any)=>{
        console.log(res);
        this.allBooks = res;
      },
      error: (res: any) => {
        console.log(res);
        
      }
    })
  }

  deleteBook(id: any){
    this.api.deleteBookApi(id).subscribe({
      next: (res: any)=>{
        alert("Successfully deleted")
        this.getAllBooks();
      },
      error: (res: any) => {
        alert(res.error);
      }
    })
  }

}
