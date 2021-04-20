import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  productItem= {

    servicename: '',
    serviceservice: ''
  
}
productitem2={
  user:'',
  userservice:''
}

  constructor(private productService: ServiceService,private router: Router) { }

  ngOnInit(): void {
    let productId = localStorage.getItem("editProductId");
    this.productService.getProduct(productId).subscribe((data)=>{
      this.productItem=JSON.parse(JSON.stringify(data));
  })
  
  }

 editProduct()
  {    
    this.productService.editProduct(this.productItem);   
    alert("Success");
    this.router.navigate(['nav/user']);
  }
}
