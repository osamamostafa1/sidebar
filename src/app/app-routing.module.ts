import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'product', component: ProductComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
