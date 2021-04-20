import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  productItem= {
    
    servicename: '',
    serviceservice: '',
     
}
products= [{
 
  servicename: '',
  serviceservice: '',
 

}]


grp1:any;
grp2:any;
  constructor(private productService: ServiceService,private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
  })
}
  AddProduct()
  {    
    this.productService.newProduct(this.productItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['nav/user']);
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
  });
  }
clear(){
  this.grp1=""
  this.grp2=""
}
deleteProduct(product:any)
  {
    this.productService.deleteProduct(product._id)
      .subscribe((data) => {
        this.products = this.products.filter(p => p !== product);
      })
    

  }
  

  editProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(['nav/update']);

  }

}
