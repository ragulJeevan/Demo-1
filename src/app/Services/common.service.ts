import { Injectable } from '@angular/core';
import { root } from '../widgets/urls';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

let base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private _loader$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient,private snackbar: MatSnackBar) { }

  /**************LOADER****************/
  setLoader(data: any) {
    this._loader$.next(data);
  }
  get getLoader() {
    return this._loader$.asObservable();
  }

  /************************************/

  /**************SNACKBAR****************/
  showmsg(arg: any, res: string) {
    let style =
      res == 'success' ? 'custom-style-success' : 'custom-style-error';
    this.snackbar.open(arg, 'X', {
      duration: 300000,
      verticalPosition: 'center' as MatSnackBarVerticalPosition,
      horizontalPosition: 'center',
      panelClass: [style],
    });
  }

  /************************************/

  // COMMON GET
  get(url: string) {
    return this.http.get(`${base_url}/${url}`);
  }
  // COMMON POST
  post(url: string, payLoad: any) {
    return this.http.post(`${base_url}/${url}`, payLoad);
  }
  // COMMON PUT
  put(url: string, payLoad: any) {
    return this.http.put(`${base_url}/${url}`, payLoad);
  }
  // COMMON DELETE
  delete(url: string) {
    return this.http.delete(`${base_url}/${url}`);
  }
}
