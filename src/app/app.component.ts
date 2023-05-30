import { Component, OnInit } from '@angular/core';
import { BbddService } from './bbdd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public datos: any;

  constructor(private bbdd: BbddService) {}

  ngOnInit(): void {
    this.bbdd.getTheHashi().subscribe((data: any) => {
      this.datos = data;
    });
  }
}
