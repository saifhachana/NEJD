import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnyAaaaRecord } from 'dns';
import {Ad} from '../models/Ad'
@Injectable({
  providedIn: 'root'
})
export class AdService {
url;
  constructor(private _http: HttpClient) {
    this.url="https://backendnejd.herokuapp.com/api/ad";
   }

   getallad(){
    return this._http.get<Ad[]>(`${this.url}/get_ad`);
   }

   addad(ad){
    return this._http.post(`${this.url}/add_ad`,ad);
   }

   updatead(ad){
    return this._http.put(`${this.url}/update_ad`,ad);
   }

   deletead(id){
    return this._http.delete(`${this.url}/delete_ad/${id}`);
   }
}
