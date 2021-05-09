import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  postImg(fd: FormData): Observable<any> {
    return this.http.post("https://api.TheDogAPI.com/v1/images/upload", fd);
  }
}
