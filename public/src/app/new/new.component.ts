import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Router} from '../../../node_modules/@angular/router'


@Component({
  selector: 'NewComponent',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  private product :any

  @Output() productEmitter = new EventEmitter();

  constructor(private pr:HttpService, private router:Router) { 
    this.init();
  }

  ngOnInit() {
  }
  init(){
    this.product={
      name:"",
      qty:"",
      price:"", errors:{}
    }
  }
  create(){
    this.pr.addProduct(this.product, (data)=>{
      if (data.errors){
        this.product.errors=data.errors;
      }else{
        this.productEmitter.emit(data);
        this.init();
        return this.router.navigateByUrl("/products");

      }
  })
  }

}
