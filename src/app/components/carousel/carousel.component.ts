import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carousel:any[]=[
    {
      name:'TITULO',
      img:'assets/slider1.png',
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus neque ipsam explicabo sint aperiam dolore dolorum voluptas atque quia porro rerum odio ea  beatae aut aliquam, rem quo repellat saepe. Dolorem, explicabo enim nulla, nam beatae aliquid laudantium reprehenderit blanditiis debitis soluta quidem aperiam  atque sapiente itaque tempora aspernatur? Maiores.',
      button:'sueño'}, 
    {
      name:'TITULO',
      img:'assets/slider2.png',
      desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus neque ipsam explicabo sint aperiam dolore dolorum voluptas atque quia porro rerum odio ea beatae aut aliquam, rem quo repellat saepe. Dolorem, explicabo enim nulla, nam beatae aliquid laudantium reprehenderit blanditiis debitis soluta quidem aperiam atque sapiente itaque tempora aspernatur? Maiores.'
    },

    {
      img:'assets/slider3.png',
    }
  ];


  constructor(private _config:NgbCarouselConfig) {
    _config.interval = 5000;
    _config.pauseOnHover = true;
    // _config.showNavigationArrows = false;
  }

  ngOnInit(): void {
  }

}
