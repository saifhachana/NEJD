import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contract } from '../Models/Contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  url;
  
  constructor(private _http: HttpClient) {
    this.url="https://backendnejd.herokuapp.com/api/contract";
   }

   getallContract(){
    return this._http.get<Contract[]>(`${this.url}/get_contract`);
   }

   addcont(cont){
    return this._http.post(`${this.url}/add_conract`,cont);
   }


}
