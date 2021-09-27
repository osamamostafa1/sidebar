import { Component } from '@angular/core';
import { ChangeLanguageService } from './services/change-language.service';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sidebar';
  constructor(
    public sideBarService: SidebarService,
    public languageService: ChangeLanguageService
  ) {
    if (localStorage.getItem('lang') == 'ar') {
      localStorage.setItem('lang', 'ar')
      this.languageService.langauge.next('ar')
    }
    else if (localStorage.getItem('lang') == 'en') {
      localStorage.setItem('lang', 'en')
      this.languageService.langauge.next('en')
    } else {
      localStorage.setItem('lang', 'ar')
      this.languageService.langauge.next('ar')
    }

    document.querySelector('body')!.setAttribute('dir', localStorage.getItem('lang') == 'ar' ? 'rtl' : 'ltr');
    document.querySelector('html')!.setAttribute('lang', localStorage.getItem('lang') == 'ar' ? 'ar' : 'en');
  }
}
