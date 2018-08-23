import { Component, OnInit} from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute} from '../../../node_modules/@angular/router';
@Component({
  selector: 'OneComponent',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  private product:any;
 

  constructor(
    private pr:HttpService, 
    private route: ActivatedRoute, 
    private router:Router

  ) { }

  ngOnInit() {
    this.One()
  }

  One(){
    this.route.params.subscribe(params =>{
      this.pr.findOne(params.id, (data)=>{
        this.product=data;
      });
    });
  }

  delete(product){
    this.pr.deleteOne(product, data=>{
      return this.router.navigateByUrl("/");
    })
    
  }
 
}
