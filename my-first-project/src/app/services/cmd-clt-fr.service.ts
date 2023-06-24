import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommandeClient } from 'src/app/Models/CommandeClient';
import { CommandeFournisseur } from 'src/app/Models/CommandeFournisseur';
import {LigneCommandeClient} from "../Models/LigneCommandeClient";
import {LigneCommandeFournisseur} from "../Models/LigneCommandeFournisseur";

@Injectable({
  providedIn: 'root'
})
export class CmdCltFrService {
  private readonly API_BASE_URL = 'http://localhost:3000'; // Remplacez par l'URL de votre API
  private readonly COMMANDE_FOURNISSEUR_ENDPOINT = '/commandesfournisseurs';
  private readonly CREATE_COMMANDE_FOURNISSEUR_ENDPOINT = this.COMMANDE_FOURNISSEUR_ENDPOINT + '/create';
  private readonly FIND_COMMANDE_FOURNISSEUR_BY_ID_ENDPOINT = this.COMMANDE_FOURNISSEUR_ENDPOINT + '/{idCommandeFournisseur}';
  private readonly FIND_COMMANDE_FOURNISSEUR_BY_CODE_ENDPOINT = this.COMMANDE_FOURNISSEUR_ENDPOINT + '/filter/{codeCommandeFournisseur}';
  private readonly FIND_ALL_COMMANDE_FOURNISSEUR_ENDPOINT = this.COMMANDE_FOURNISSEUR_ENDPOINT + '/all';
  private readonly DELETE_COMMANDE_FOURNISSEUR_ENDPOINT = this.COMMANDE_FOURNISSEUR_ENDPOINT + '/delete/{idCommandeFournisseur}';

  constructor(private http: HttpClient) {}

  // Services pour les commandes client
  saveCommandeClient(commandeClient: CommandeClient): Observable<CommandeClient> {
    return this.http.post<CommandeClient>(`${this.API_BASE_URL}/commandesclients/create`, commandeClient);
  }

  getCommandeClientById(id: number): Observable<CommandeClient> {
    return this.http.get<CommandeClient>(`${this.API_BASE_URL}/commandesclients/${id}`);
  }

  getCommandeClientByCode(code: string): Observable<CommandeClient> {
    return this.http.get<CommandeClient>(`${this.API_BASE_URL}/commandesclients/filter/${code}`);
  }

  getAllCommandesClient(): Observable<CommandeClient[]> {
    return this.http.get<CommandeClient[]>(`${this.API_BASE_URL}/commandesclients/all`);
  }

  deleteCommandeClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_BASE_URL}/commandesclients/delete/${id}`);
  }

  updateEtatCommandeClient(idCommande: number, etatCommande: string): Observable<CommandeClient> {
    return this.http.patch<CommandeClient>(`${this.API_BASE_URL}/commandesclients/update/etat/${idCommande}/${etatCommande}`, {});
  }

  updateQuantiteCommandeClient(idCommande: number, idLigneCommande: number, quantite: number): Observable<CommandeClient> {
    return this.http.patch<CommandeClient>(`${this.API_BASE_URL}/commandesclients/update/quantite/${idCommande}/${idLigneCommande}/${quantite}`, {});
  }

  updateClientCommandeClient(idCommande: number, idClient: number): Observable<CommandeClient> {
    return this.http.patch<CommandeClient>(`${this.API_BASE_URL}/commandesclients/update/client/${idCommande}/${idClient}`, {});
  }

  updateArticleCommandeClient(idCommande: number, idLigneCommande: number, idArticle: number): Observable<CommandeClient> {
    return this.http.patch<CommandeClient>(`${this.API_BASE_URL}/commandesclients/update/article/${idCommande}/${idLigneCommande}/${idArticle}`, {});
  }

  deleteArticleCommandeClient(idCommande: number, idLigneCommande: number): Observable<CommandeClient> {
    return this.http.delete<CommandeClient>(`${this.API_BASE_URL}/commandesclients/delete/article/${idCommande}/${idLigneCommande}`);
  }

  getLignesCommandesClientById(idCommande: number): Observable<LigneCommandeClient[]> {
    return this.http.get<LigneCommandeClient[]>(`${this.API_BASE_URL}/commandesclients/lignesCommande/${idCommande}`);
  }

  // Services pour les commandes fournisseur
  saveCommandeFournisseur(commandeFournisseur: CommandeFournisseur): Observable<CommandeFournisseur> {
    return this.http.post<CommandeFournisseur>(`${this.API_BASE_URL}${this.CREATE_COMMANDE_FOURNISSEUR_ENDPOINT}`, commandeFournisseur);
  }

  getCommandeFournisseurById(id: number): Observable<CommandeFournisseur> {
    return this.http.get<CommandeFournisseur>(`${this.API_BASE_URL}${this.FIND_COMMANDE_FOURNISSEUR_BY_ID_ENDPOINT.replace('{idCommandeFournisseur}', id.toString())}`);
  }

  getCommandeFournisseurByCode(code: string): Observable<CommandeFournisseur> {
    return this.http.get<CommandeFournisseur>(`${this.API_BASE_URL}${this.FIND_COMMANDE_FOURNISSEUR_BY_CODE_ENDPOINT.replace('{codeCommandeFournisseur}', code)}`);
  }

  getAllCommandesFournisseur(): Observable<CommandeFournisseur[]> {
    return this.http.get<CommandeFournisseur[]>(`${this.API_BASE_URL}${this.FIND_ALL_COMMANDE_FOURNISSEUR_ENDPOINT}`);
  }

  deleteCommandeFournisseur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_BASE_URL}${this.DELETE_COMMANDE_FOURNISSEUR_ENDPOINT.replace('{idCommandeFournisseur}', id.toString())}`);
  }

  updateEtatCommandeFournisseur(idCommande: number, etatCommande: string): Observable<CommandeFournisseur> {
    return this.http.patch<CommandeFournisseur>(`${this.API_BASE_URL}${this.COMMANDE_FOURNISSEUR_ENDPOINT}/update/etat/${idCommande}/${etatCommande}`, {});
  }

  updateQuantiteCommandeFournisseur(idCommande: number, idLigneCommande: number, quantite: number): Observable<CommandeFournisseur> {
    return this.http.patch<CommandeFournisseur>(`${this.API_BASE_URL}${this.COMMANDE_FOURNISSEUR_ENDPOINT}/update/quantite/${idCommande}/${idLigneCommande}/${quantite}`, {});
  }

  updateFournisseurCommandeFournisseur(idCommande: number, idFournisseur: number): Observable<CommandeFournisseur> {
    return this.http.patch<CommandeFournisseur>(`${this.API_BASE_URL}${this.COMMANDE_FOURNISSEUR_ENDPOINT}/update/fournisseur/${idCommande}/${idFournisseur}`, {});
  }

  updateArticleCommandeFournisseur(idCommande: number, idLigneCommande: number, idArticle: number): Observable<CommandeFournisseur> {
    return this.http.patch<CommandeFournisseur>(`${this.API_BASE_URL}${this.COMMANDE_FOURNISSEUR_ENDPOINT}/update/article/${idCommande}/${idLigneCommande}/${idArticle}`, {});
  }

  deleteArticleCommandeFournisseur(idCommande: number, idLigneCommande: number): Observable<CommandeFournisseur> {
    return this.http.delete<CommandeFournisseur>(`${this.API_BASE_URL}${this.COMMANDE_FOURNISSEUR_ENDPOINT}/delete/article/${idCommande}/${idLigneCommande}`);
  }

  getLignesCommandesFournisseurById(idCommande: number): Observable<LigneCommandeFournisseur[]> {
    return this.http.get<LigneCommandeFournisseur[]>(`${this.API_BASE_URL}${this.COMMANDE_FOURNISSEUR_ENDPOINT}/lignesCommande/${idCommande}`);
  }
}
