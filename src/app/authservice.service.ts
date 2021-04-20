import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }
  loginUser(user:any)
  {
    return this.http.post("http://localhost:5656/signupauth",{"passauth":user})
    .subscribe(data =>{console.log(data)})
  }
}
