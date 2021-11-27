import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  OpenDetail() {
    this.router.navigate(['details'])
  }
  thumbsSwiper: any;


  slideServiceConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    arrows: true,
    autoplaySpeed: 3000,
    dots: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        infinite: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        infinite: false,
        arrows: false,
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        infinite: false,
        arrows: false,
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        infinite: false,
        arrows: false,
      }
    }]
  };

  siderBarTitle = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        infinite: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        infinite: false,
        arrows: false,
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        infinite: false,
        arrows: false,
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        infinite: false,
        arrows: false,
      }
    }]
  };


}
