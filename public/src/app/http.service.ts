import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private product:HttpClient) { }

  all(cb){
    this.product.get('/api/products')
    .subscribe(data=>cb(data));
    }
  
    addProduct(newProduct, cb){
      this.product.post('/api/products', newProduct)
      .subscribe(data=>cb(data))
    }
    findOne(id,cb){
      this.product.get("/api/products/"+id)
      .subscribe(data=>cb(data));
    }
    update(product,cb){
      this.product.patch("/api/products/"+ product._id, product)
      .subscribe(data=>cb(data));
    }
    deleteOne(product, cb){
      this.product.delete('/api/products/'+product)
      .subscribe (data =>cb(data))
      console.log('hey')
    }
}
