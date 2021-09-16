import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  lang: any = 'ar'
  constructor(public sideBarService: SidebarService,) {
    this.lang = localStorage.getItem('lang')
  }

  ngOnInit() {
  }

  onToggleSideBar() {
    this.sideBarService.changeSideBar()
  }

}
