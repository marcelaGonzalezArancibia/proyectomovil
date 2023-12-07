import { Component, OnInit } from '@angular/core';
///////////////////////////////////////////////////////////////////77

import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
   console.log('paso')
   setTimeout(()=>{
    this.router.navigate(['/home']);
   },5000);
  }

 

}