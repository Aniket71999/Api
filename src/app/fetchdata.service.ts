import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import{Observable} from 'rxjs/Observable';
@Injectable({
  providedIn: 'root',
})
export class FetchdataService {
  constructor(private http: HttpClient) {}
  getdata() {
    return this.http.get('https://picsum.photos/v2/list?page=2&limit=100');
  }
}
