import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute} from '../../../node_modules/@angular/router'

@Component({
  selector: 'EditComponent',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private product:any
  constructor(
    private pr:HttpService, 
    private route: ActivatedRoute, 
    private router:Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.pr.findOne(params.id, (data)=>{
      // console.log(data)
      this.product=data
      });
    });
  }
  update(){
		this.pr.update(this.product, (data)=>{
      if (data.errors){
        this.product.errors=data.errors;
      }else{
        console.log(data);
        this.product = data; 
        return this.router.navigateByUrl("/") 
		};
	});
  }
  
}
