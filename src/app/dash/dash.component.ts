
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  products= [{
 
    servicename: '',
    serviceservice: '',
    user:'',
    userservice:''
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
this.productService.postdetails2().subscribe((datau)=>{
  this.userposts=JSON.parse(JSON.stringify(datau));
})
}
constructor( private productService: ServiceService,private router: Router) {}
AddProduct()
{    
  this.productService.newuser2(this.productItem);
  console.log("Called");    
  alert("Success");
  this.productService.postdetails2().subscribe((datau)=>{
    this.userposts=JSON.parse(JSON.stringify(datau));
  })

}
clear(){
  this.grp1=""
  
}

}