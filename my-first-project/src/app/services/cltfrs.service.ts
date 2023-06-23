import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from 'src/app/Models/Client';
import { Fournisseur } from 'src/app/Models/Fournisseur';

@Injectable({
  providedIn: 'root'
})
export class CltFrsService {
  private BASE_URL = 'http://localhost:8089/gestiondestock';

  constructor(private httpClient: HttpClient) {}

  // Services du client
  saveClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(`${this.BASE_URL}/clients/create`, client);
  }

  getClientById(id: number): Observable<Client> {
    return this.httpClient.get<Client>(`${this.BASE_URL}/clients/${id}`);
  }

  getAllClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${this.BASE_URL}/clients/all`);
  }

  deleteClient(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.BASE_URL}/clients/delete/${id}`);
  }

  // Services du fournisseur
  saveFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.httpClient.post<Fournisseur>(`${this.BASE_URL}/fournisseurs/create`, fournisseur);
  }

  getFournisseurById(id: number): Observable<Fournisseur> {
    return this.httpClient.get<Fournisseur>(`${this.BASE_URL}/fournisseurs/${id}`);
  }

  getAllFournisseurs(): Observable<Fournisseur[]> {
    return this.httpClient.get<Fournisseur[]>(`${this.BASE_URL}/fournisseurs/all`);
  }

  deleteFournisseur(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.BASE_URL}/fournisseurs/delete/${id}`);
  }
}
