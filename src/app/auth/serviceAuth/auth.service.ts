import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  // Método opcional para guardar el token
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Método opcional para obtener el token
  getToken(): string | null {
    const token = localStorage.getItem('token');
    console.log('Token obtenido:', token);  // <-- Esto te dirá si el token está guardado
    return token;

  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('token');
  }

}
