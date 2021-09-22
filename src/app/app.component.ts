import { Component } from '@angular/core';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sidebar';
  constructor(public sideBarService: SidebarService,) {
    if (localStorage.getItem('lang') == 'ar') {
      localStorage.setItem('lang', 'ar')
    }
    else if (localStorage.getItem('lang') == 'en') {
      localStorage.setItem('lang', 'en')
    }else{
      localStorage.setItem('lang', 'ar')
    }

    document.querySelector('body')!.setAttribute('dir', localStorage.getItem('lang') == 'ar' ? 'rtl' : 'ltr');
    document.querySelector('html')!.setAttribute('lang', localStorage.getItem('lang') == 'ar' ? 'ar' : 'en');
  }
}
