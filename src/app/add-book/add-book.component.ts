import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';

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

  constructor( private api: ApiService){}

  clearField() {

  }

  addBook() {
    this.api.addBookApi(this.book).subscribe({
      next:(res: any) => {
        alert("Book added succesfully");
      },
      error:(res: any) =>{
        alert(res.error);
      }
    })
  }

}
