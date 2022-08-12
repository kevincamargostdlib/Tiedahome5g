import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
// import { faCoffee } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  cantidad = 0
  productos: { id: number; nombre: string; precio: number; cantidad: number; imagen: string; }[] = [];
  totales: { id: number; nombre: string; precio: number; cantidad: number; imagen: string; }[]=[];
  totalValor: number=0;
  filtrarTabla:string='';

  ngOnInit(): void {
    this.productos = [
      {
        id: 1,
        nombre: 'Arroz Roa 1000g',
        precio: 1200,
        cantidad: 0,
        imagen: 'producto1'
      },
      {
        id: 2,
        nombre: 'Coca Cola 250 ml',
        precio: 1200,
        cantidad: 0,
        imagen: 'producto2'
      },
      {
        id: 3,
        nombre: 'Atum Van Camp 180',
        precio: 1200,
        cantidad: 0,
        imagen: 'producto3'
      },
      {
        id: 4,
        nombre: 'Maiz Tostado 40g',
        precio: 1200,
        cantidad: 0,
        imagen: 'producto4'
      }
    ]
  }
  mobileQuery: MediaQueryList;




  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  suma(array: { id: number; nombre: string; precio: number; cantidad: number; imagen: string; }) {
    let indice = this.productos.indexOf(array);
    this.productos[indice].cantidad += 1
    this.total();
  }
  resta(array: { id: number; nombre: string; precio: number; cantidad: number; imagen: string; }) {
    let indice = this.productos.indexOf(array);
    if (this.productos[indice].cantidad != 0) {
      this.productos[indice].cantidad -= 1
    }
    this.total();
  }

  total(){
    let total=[];
    let totalValor=0;
    for (const item of this.productos) {
      if(item.cantidad>0)
      total.push(
       item
      )
      totalValor+=item.cantidad*item.precio;
    }
    this.totales=total;
    this.totalValor=totalValor;
  }




}
