import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'details', component: DetailsProductComponent},
  {path: 'buy', component: BuyProductComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
