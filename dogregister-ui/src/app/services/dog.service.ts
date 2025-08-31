import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment';
import { Dog, CreateDog } from '../models/dog';



@Injectable({
  providedIn: 'root'
})
export class DogService {
  private apiUrl = `${environment.apiUrl}/dogs`; 

  constructor(private http: HttpClient) {}

  getAllDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.apiUrl);
  }

  createDog(dog: Dog): Observable<Dog> {
    return this.http.post<Dog>(this.apiUrl, dog);
  }

  getDog(id: number): Observable<Dog> {
    return this.http.get<Dog>(`${this.apiUrl}/${id}`)
  }

  deleteDog(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
  
}
