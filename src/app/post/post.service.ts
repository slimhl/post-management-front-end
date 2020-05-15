import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

 postUrl = 'http://localhost:8080/api/post/all';

 getPosts() {
  return this.http.get(this.postUrl);
  }
}
