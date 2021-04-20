import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginauthService } from '../loginauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  user:any;
  pass:any;
  
  accntObj:any;

  constructor(private router:Router, private signupService: LoginauthService) { }
  
User={
  serviceuser:'',
  servicepass:''
};

  ngOnInit(): void {
  }


  checkpass(){
  this.signupService.searchAccount(this.user)
  .subscribe(data => {
    this.accntObj = data;
    if(this.accntObj!= null)
    {
      if(this.accntObj.servicepass == this.pass && this.accntObj.serviceuser == this.user)
      {
        alert("  Welcome");
        this.router.navigate(["nav/userv"]);
      }
     
      else
      {
        alert("Wrong credentials, try again !!!");
      }

    }
  
  if(this.user=="123@gmail.com"&& this.pass=="admin123"){
        
      this.router.navigate(["nav/user"]);
    }
  });
  

}
btnClick(){
  this.router.navigateByUrl('login/signup');
};
}