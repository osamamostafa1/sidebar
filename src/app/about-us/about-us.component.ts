import { Component, OnInit } from '@angular/core';
import { ChangeLanguageService } from '../services/change-language.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(
    public languageService: ChangeLanguageService
  ) {

  }

  ngOnInit() {

  }

}
