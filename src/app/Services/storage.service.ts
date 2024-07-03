import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  /** Declare CRYPTO AES ENCRYPTION KEY */
  public p40sCryptoLocal = 'phygitalz';

  constructor() { }


  postData(setName: string, data: any) {
    localStorage.setItem(`${setName}`, this.encryptData(data));
  }
  // 
  getData(getName: string) {
    let storedData: any = localStorage.getItem(`${getName}`);
    let data = storedData ? this.decryptData(storedData) : null;
    let decodedData: any = data ? data : null;
    return decodedData;
  }
  // To encrypt data
  encryptData(data: any): string {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), this.p40sCryptoLocal).toString();
    return encryptedData;
  }
  // To decrypt data
  decryptData(encryptedData: string): any {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, this.p40sCryptoLocal);
    const decryptedData = (decryptedBytes?.sigBytes > 0) ? JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8)) : null;
    // const decryptedData = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  }

}
