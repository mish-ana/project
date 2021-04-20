import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userv',
  templateUrl: './userv.component.html',
  styleUrls: ['./userv.component.css']
})
export class UservComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
navigate(){
  this.router.navigate(["nav/dash"])
}
navigate2(){
  this.router.navigate(["nav/dash2"])
}
}
