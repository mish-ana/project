import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginauthService {
  
  constructor(private http: HttpClient) { }
  searchAccount(user:any)
  {
    
    
      return this.http.get("http://localhost:5656/accounts/searchaccount/"+user);
}
}
