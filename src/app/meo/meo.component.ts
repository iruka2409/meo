import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-meo',
  templateUrl: './meo.component.html',
  styleUrls: ['./meo.component.css']
})
export class MeoComponent implements OnInit {

  protected = [
    {
      ten: 'mèo 1',
      anh: 'https://thichthucung.com/wp-content/uploads/meo-den.jpg'
    },
    {
      ten: 'mèo 2',
      anh: 'https://thichthucung.com/wp-content/uploads/meo-den.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  delete(meod: string): void
  {
    const index = this.protected.findIndex(protect => protect.ten === meod);
    this.protected.splice(index,1);
  }

}
