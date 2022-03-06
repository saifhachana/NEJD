import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Companie } from '../Models/Companie';

@Injectable({
  providedIn: 'root'
})
export class CompanieService {
  url;
  constructor(private _http: HttpClient) {
    this.url="https://backendnejd.herokuapp.com/api/comp";
   }
   getallComp(){
    return this._http.get<Companie[]>(`${this.url}/get_Companies`);
   }
   addcomp(comp){
    return this._http.post(`${this.url}/add_Companie`,comp);
   }

   updatecomp(comp){
    return this._http.put(`${this.url}/update_companie`,comp);
   }

   deletecomp(id){
    return this._http.delete(`${this.url}/delete_companie/${id}`);
   }

}
