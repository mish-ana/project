import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getProduct(id:any){
    return this.http.get("http://localhost:5656/"+id);
  }
  getProduct2(id:any){
    return this.http.get("http://localhost:5656/user"+id);
  }
  getProducts(){
    return this.http.get('http://localhost:5656/servicedetails');
  }

  newProduct(item:any)
  {   
    return this.http.post("http://localhost:5656/insert",{"product":item})
    .subscribe(data =>{console.log(data)})
  }
  newuser(item:any)
  {   
    return this.http.post("http://localhost:5656/insert/user",{"product":item})
    .subscribe(data =>{console.log(data)})
  }
  newuser2(item:any)
  {   
    return this.http.post("http://localhost:5656/insert/user2",{"product":item})
    .subscribe(data =>{console.log(data)})
  }
  postdetails(){
    return this.http.get('http://localhost:5656/servicedetails/userpost');
  }
  postdetails2(){
    return this.http.get('http://localhost:5656/servicedetails/userpost2');
  }
  deleteProduct(id:any)
  {

    return this.http.delete("http://localhost:5656/remove/"+id)

  }

  deleteProduct2(id:any)
  {

    return this.http.delete("http://localhost:5656/remove/user"+id)

  }
  editProduct(product:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:5656/update",product)
    .subscribe(data =>{console.log(data)})
  }
}
