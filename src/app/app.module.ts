import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { BuyProductComponent } from './buy-product/buy-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    DetailsProductComponent,
    BuyProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzGridModule,
    NzFormModule,
    NzDropDownModule,
    NzSelectModule,
    NzMenuModule,
    NzLayoutModule,
    SlickCarouselModule,
    NzRateModule,
    FormsModule,
    NzBackTopModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
