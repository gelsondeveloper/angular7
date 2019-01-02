import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menus: any = [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'Nótícias',
      link: '/noticias'
    },
    {
      label: 'Vídeo',
      link: '/video'
    },
    {
      label: 'Lista',
      link: '/lista'
    },
    {
      label: 'Fotos',
      link: '/fotos'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
