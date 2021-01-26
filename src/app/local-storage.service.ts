import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  getAllUsers(){
    if (this.isLocalStorageSupported) {
      let users= [];
      Object.keys(localStorage).forEach(data => 
        {
          let item = localStorage.getItem(data);
          let name= data.split('_');
          let user = {
            name: name[0], 
            score: item
          };
          users.push(user);
        });

        return users;
    }
    return null;
  }

  set(key: string, value: any): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  get isLocalStorageSupported(): boolean {
    return !!this.localStorage
  }
}