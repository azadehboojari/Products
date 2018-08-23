import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'AllComponent',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  private products: any
  constructor( private pr:HttpService) { }

  ngOnInit() {
    this.pr.all(data=>this.products=data)
  }

}
