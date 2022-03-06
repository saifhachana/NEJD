import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  getallCl() {
    throw new Error('Method not implemented.');
  }
  url;
  constructor(private _http: HttpClient) { 
    //this.url="http://localhost:8080/api/client";
    this.url="https://backendnejd.herokuapp.com/api/client"
  }

  getallC(){
    return this._http.get<Client[]>(`${this.url}/getclient`);
   }

   addCl(cl){
    return this._http.post(`${this.url}/add_client`,cl);
   }

   updateCl(cl){
    return this._http.put(`${this.url}/update_client`,cl);
   }

   deleteCl(id){
    return this._http.delete(`${this.url}/delete_client/${id}`);
   }


}
