import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public items: any[] = [
    { text: 'Registrar mi restaurante', link: '', img: '' },
    { text: 'Ayuda', link: '', img: '' },
    { text: 'Iniciar sesión', link: '', img: '/assets/icons/login.png' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
