import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { UserInterface, UserModel } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  allUsers(): Observable<any>{
    return this.http.get(environment.apiUrl);
  }

  oneUser(id: string): Observable<any>{
    return this.http.get(environment.apiUrl.concat(id));
  }

  saveUser(user: UserModel): Observable<any>{
    return this.http.post(environment.apiUrl, user);
  }

  updateUser(id: string): Observable<any>{
    return this.http.get(environment.apiUrl.concat(id));
  }


  removeUser(id: string): Observable<any>{
    return this.http.delete(environment.apiUrl.concat(id));
  }
}
