import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { root } from '../../widgets/urls';

let base_url = environment?.base_url;
const client_url = root?.client;

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient,) { }


  // COMMON GET
  get(url: string) {
    return this.http.get(`${client_url}/${url}`);
  }
  // COMMON POST
  post(url: string, payLoad: any) {
    return this.http.post(`${client_url}/${url}`, payLoad);
  }
  // COMMON PUT
  put(url: string, payLoad: any) {
    return this.http.put(`${client_url}/${url}`, payLoad);
  }
  // COMMON DELETE
  delete(url: string) {
    return this.http.delete(`${client_url}/${url}`);
  }
}
