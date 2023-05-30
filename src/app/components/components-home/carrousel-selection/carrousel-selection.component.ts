import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BbddService } from 'src/app/bbdd.service';

@Component({
  selector: 'app-carrousel-selection',
  templateUrl: './carrousel-selection.component.html',
  styleUrls: ['./carrousel-selection.component.scss'],
})
export class CarrouselSelectionComponent implements OnInit {
  public restaurantes: any;
  public contador: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bbddService: BbddService
  ) {}

  ngOnInit(): void {
    this.bbddService.getTheHashi().subscribe((data: any) => {
      this.restaurantes = data.restaurantes;
    });
  }

  public aumentarContador(): void {
    this.contador++;

    if (this.contador >= this.restaurantes.length / 4) {
      this.contador = 0;
    }
  }
  public disminuirContador(): void {
    if (this.contador === 0) {
      this.contador = this.restaurantes.length / 4;
    }
    this.contador--;
  }

  public setContador(valor: number): void {
    this.contador = valor;
  }
  public moverX(): string {
    return `translateX(-${
      (100 / this.restaurantes.length) * this.contador * 4
    }%)`;
  }

  public valorAncho(): string {
    return `${(this.restaurantes.length * 100) / 4}%`;
  }
  public valorGrid(): string {
    return `repeat( ${this.restaurantes.length}, 1fr)`;
  }
}
