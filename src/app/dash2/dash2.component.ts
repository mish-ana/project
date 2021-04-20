import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service'


@Component({
  selector: 'app-dash2',
  templateUrl: './dash2.component.html',
  styleUrls: ['./dash2.component.css']
})
export class Dash2Component implements OnInit {
  products= [{
 
    servicename: '',
    serviceservice: ''
  
}]
userposts=[{
  user:'',
  userservice:''
}]
productItem= {
    
  user: '',
  userservice: '',
   
}
grp1:any;

        
ngOnInit(): void{
  this.productService.getProducts().subscribe((data)=>{
    this.products=JSON.parse(JSON.stringify(data));
    
}),
this.productService.postdetails().subscribe((datau)=>{
  this.userposts=JSON.parse(JSON.stringify(datau));
})
}
constructor( private productService: ServiceService,private router: Router) {}
AddProduct()
{    
  this.productService.newuser(this.productItem);
  console.log("Called");    
  alert("Success");
  this.productService.postdetails().subscribe((datau)=>{
    this.userposts=JSON.parse(JSON.stringify(datau));
  })

}
clear(){
  this.grp1=""
  
}

}
