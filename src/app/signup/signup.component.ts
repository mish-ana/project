import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  AuthserviceService  } from '../authservice.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  passItem= {
    servicefirstname: '',
    servicelastname: '',

    serviceuser:'',
    servicepass: '',
    servicephonenumber: '',
 

}
confpass:any;
servicepass:any

  constructor(private signupService: AuthserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  AddPass()
  {    
    if(this.servicepass==this.confpass){
    this.signupService.loginUser(this.passItem);
    console.log("Called");    
    alert("Success Now Login");
    this.router.navigate(['/login']);
    }
    else{
      alert("password dont match")
    }
  }



}
