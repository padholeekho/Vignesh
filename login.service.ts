import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { ApiService } from '../../../../core/services'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private apiService: ApiService ) { }

  loginApi(data): Observable<any> {
    return this.apiService.post('/api/rest/authentication/signin/index', data);
  }
  
}
