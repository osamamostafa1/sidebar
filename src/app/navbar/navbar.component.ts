import { Component, OnInit } from '@angular/core';
import { ChangeLanguageService } from '../services/change-language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public languageService: ChangeLanguageService
  ) {

  }


  ngOnInit() {
  }


  changeLanguage() {
    if (localStorage.getItem('lang') == 'ar') {
      localStorage.setItem('lang', 'en')
      this.languageService.langauge.next('en')
    }
    else if (localStorage.getItem('lang') == 'en') {
      localStorage.setItem('lang', 'ar')
      this.languageService.langauge.next('ar')
    }

    document.querySelector('body')!.setAttribute('dir', localStorage.getItem('lang') == 'ar' ? 'rtl' : 'ltr');
    document.querySelector('html')!.setAttribute('lang', localStorage.getItem('lang') == 'ar' ? 'ar' : 'en');

  }





}
