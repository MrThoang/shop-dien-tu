import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }


  OpenBuy() {
    this.router.navigate(['buy'])
  }

  slideServiceConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    arrows: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        infinite: true,
        arrows: true,
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        infinite: true,
        arrows: true,
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        infinite: true,
        arrows: true,
      }
    }]
  };

}
