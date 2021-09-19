import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  lang: any = 'ar'
  labelItem:string = ''
  show:string ='inActive'
  constructor(public sideBarService: SidebarService,) {
    this.lang = localStorage.getItem('lang')
  }

  ngOnInit() {
  }

  onToggleSideBar() {
    this.sideBarService.changeSideBar()
  }

  openMenu(label:string){
    if(this.show == 'active'){
      this.show = 'inActive'
    }else{
      this.show = 'active'
    }
    this.labelItem = label
  }

  closeMenu(){
    this.show = 'inActive'
  }

}

