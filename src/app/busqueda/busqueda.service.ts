import { Injectable } from "@angular/core";
import { Busqueda } from "./busqueda.model";
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { BehaviorSubject, Subject } from "rxjs";
import { environment } from '../../environments/environments.development';

@Injectable({providedIn: 'root'})
export class BusquedaService {
  apiKey:string = environment.apiKey;
  headers = new HttpHeaders();
  header = this.headers.set('X-Api-Key', this.apiKey);

  constructor(private http:HttpClient) {}
  private busqueda: Busqueda[] = [];
  private busquedaResults = new Subject<Busqueda[]>();
  public loading = new BehaviorSubject<boolean>(true);

  getRegionOceania(){
    this.loading.next(true)
    this.http.get<Busqueda[]>("https://restcountries.com/v2/region/oceania", {headers: this.header})
      .subscribe((result)=>{
        this.busqueda = result;
        this.busquedaResults.next([...this.busqueda]);
      },
      ()=>{},
      ()=>{
       this.loading.next(false)
      });
  }
  getRegionAmerica(){
    this.loading.next(true)
    this.http.get<Busqueda[]>("https://restcountries.com/v2/region/Americas", {headers: this.header})
      .subscribe((result)=>{
        console.log('buscando')
        this.busqueda = result;
        this.busquedaResults.next([...this.busqueda]);
      },
       ()=>{},
       ()=>{
        this.loading.next(false)
       });
  }

  getRegionEuropa(){
    this.loading.next(true)
    this.http.get<Busqueda[]>("https://restcountries.com/v2/region/Europe", {headers: this.header})
      .subscribe((result)=>{
        this.busqueda = result;
        this.busquedaResults.next([...this.busqueda]);
      },
      ()=>{},
      ()=>{
       this.loading.next(false)
      });
  }

  getRegionAsia(){
    this.loading.next(true)
    this.http.get<Busqueda[]>("https://restcountries.com/v2/region/Asia", {headers: this.header})
      .subscribe((result)=>{
        this.busqueda = result;
        this.busquedaResults.next([...this.busqueda]);
      },
      ()=>{},
      ()=>{
       this.loading.next(false)
      });
  }

  getBusquedaObservable(){
    return this.busquedaResults.asObservable();
  }

  getLoading(){
    return this.loading;
  }
}
