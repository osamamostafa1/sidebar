import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(

  ) {

  }


  ngOnInit() {
  }


  changeLanguage() {
    if (localStorage.getItem('lang') == 'ar') {
      localStorage.setItem('lang', 'en')
    }
    else if (localStorage.getItem('lang') == 'en') {
      localStorage.setItem('lang', 'ar')
    }

    document.querySelector('body')!.setAttribute('dir', localStorage.getItem('lang') == 'ar' ? 'rtl' : 'ltr');
    document.querySelector('html')!.setAttribute('lang', localStorage.getItem('lang') == 'ar' ? 'ar' : 'en');

  }





}
