import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  book: any = {
    id: "",
    bookName: "",
    author: "",
    price: "",
    coverImg: ""
  }

  constructor( private api: ApiService, private router: Router){}

  clearField() {
    this.book={}
  }

  addBook() {
    this.api.addBookApi(this.book).subscribe({
      next:(res: any) => {
        alert("Book added succesfully");
        this.book={}
        this.router.navigateByUrl('dashboard')
      },
      error:(res: any) =>{
        alert(res.error);
      }
    })
  }

  backToHome(){
    this.router.navigateByUrl('dashboard')
  }

}
