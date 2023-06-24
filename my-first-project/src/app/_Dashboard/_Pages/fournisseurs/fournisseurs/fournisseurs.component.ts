import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CltFrsService } from 'src/app/services/cltfrs.service';
import { Fournisseur } from 'src/app/Models/Fournisseur';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {

  fournisseurs: Fournisseur[] = [];
  errorMsg: string | undefined;

  constructor(private router: Router, private cltFrsService: CltFrsService) {}

  ngOnInit(): void {
    this.getAllFournisseurs();
  }

  getAllFournisseurs(): void {
    this.cltFrsService.getAllFournisseurs()
      .subscribe(
        fournisseurs => this.fournisseurs = fournisseurs,
        error => this.errorMsg = error.message
      );
  }

  nouveauFournisseur(): void {
    this.router.navigate(['newfournisseur']);
  }

  supprimerFournisseur(id: number): void {
    this.cltFrsService.deleteFournisseur(id)
      .subscribe(() => {
        this.fournisseurs = this.fournisseurs.filter(fournisseur => fournisseur.id !== id);
      });
  }

  afficherFournisseur(id: number): void {
    this.router.navigate(['fournisseur', id]);
  }

  modifierFournisseur(id: number): void {
    this.router.navigate(['editfournisseur', id]);
  }
}
