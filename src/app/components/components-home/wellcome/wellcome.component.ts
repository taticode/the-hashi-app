import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BbddService } from 'src/app/bbdd.service';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.scss'],
})
export class WellcomeComponent implements OnInit {
  public restaurantes: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private bbddService: BbddService
  ) {}

  ngOnInit(): void {
    this.bbddService.getTheHashi().subscribe((data: any) => {
      this.restaurantes = data.restaurantes;
    });
  }
}
