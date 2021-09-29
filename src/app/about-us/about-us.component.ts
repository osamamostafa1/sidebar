import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';
import { ChangeLanguageService } from '../services/change-language.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(
    public languageService: ChangeLanguageService,
    private dialog: MatDialog,
  ) {

  }

  ngOnInit() {

  }

  updateForm() {
    const dialogRef = this.dialog.open(ContactComponent, {
      width: '1000px',
      disableClose: true,
      data: {
        action: 'Update'
      }
    })
    dialogRef.afterClosed().subscribe((data: any) => {

    })
  }

}
