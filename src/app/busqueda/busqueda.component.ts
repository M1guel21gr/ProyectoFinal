import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Busqueda } from './busqueda.model';
import { BusquedaService } from './busqueda.service';
interface BusRes {
  paises: Busqueda[];
  criteria: string;
}
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnDestroy{
  criteria: string ='';
  loading: boolean = false;
  criteriaSelected: BusRes = {paises: [],criteria: ''};
  private subResponse: Subscription;
  private loadingResponse: Subscription = Subscription.EMPTY;
  constructor(public busquedaService: BusquedaService){
    this.subResponse = Subscription.EMPTY;
  }
  onCriteriaSelectedFromChild(criteria: number){
    switch (criteria) {
      case 0:
        this.criteria='';
        this.criteriaSelected = {paises: [],criteria: this.criteria};
        break;
      case 1:
        this.criteria='Oceania';
        this.busquedaService.getRegionOceania();
        break;
      case 2:
        this.criteria='America';
        this.busquedaService.getRegionAmerica();
        break;
      case 3:
        this.criteria='Europa';
        this.busquedaService.getRegionEuropa();
        break;
      case 4:
        this.criteria='Asia';
        this.busquedaService.getRegionAsia();
        break;
      default:
        break;
    }
    this.loadingResponse = this.busquedaService.getLoading().subscribe(r=>{
      // console.log(r)
      this.loading=r;
    })
    this.subResponse = this.busquedaService.getBusquedaObservable().subscribe((r: Busqueda[])=>{
      this.criteriaSelected = {paises: r, criteria: this.criteria};
    })

  }
  ngOnDestroy(): void {
    console.log('Dejando Componente')
    this.subResponse.unsubscribe();
    this.loadingResponse.unsubscribe();
  }
}
