import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { 
  }

  public getInformation(username, repository): Observable<unknown> {
    let url = 'https://api.codetabs.com/v1/loc?github=' + username + '/' + repository;
    return this.httpClient?.get(url).pipe();
  }
}
