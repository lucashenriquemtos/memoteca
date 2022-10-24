import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pensamento} from "./pensamento";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'
  constructor(private httpClient:HttpClient) { }

  listar():Observable<Pensamento[]> { return this.httpClient.get<Pensamento[]>(this.API) }
}
