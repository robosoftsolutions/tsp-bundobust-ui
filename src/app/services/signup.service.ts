import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  public userRegister(register: any): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('X - Version', '1.0')
    return this.http.post('http://localhost:8080/api/auth/employee/signup', register, { headers: httpHeaders });
  }
}
