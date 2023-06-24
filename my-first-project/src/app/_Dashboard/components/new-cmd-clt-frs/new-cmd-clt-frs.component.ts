import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeClient } from 'src/app/Models/CommandeClient';
import { CommandeFournisseur } from 'src/app/Models/CommandeFournisseur';
import { CmdCltFrService } from 'src/app/services/cmd-clt-fr.service';

@Component({
  selector: 'app-new-cmd-clt-frs',
  templateUrl: './new-cmd-clt-frs.component.html',
  styleUrls: ['./new-cmd-clt-frs.component.css']
})
export class NewCmdCltFrsComponent implements OnInit {

  origin = '';
  isCommandeClient = false;
  isCommandeFournisseur = false;
  commandeClient: CommandeClient = {};
  commandeFournisseur: CommandeFournisseur = {};
  article: any = {}; // Ajout de la propriété "article"

  constructor(
    private activatedRoute: ActivatedRoute,
    private cmdCltFrService: CmdCltFrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupérer l'objet origine dans app-routin.ts
    this.activatedRoute.data.subscribe((data: any) => {
      this.origin = data.origin;
      this.isCommandeClient = this.origin === 'newcommandeclient';
      this.isCommandeFournisseur = this.origin === 'newcommandefournissuer';
    });

    // Initialisation des objets commandeClient, commandeFournisseur et article
    this.commandeClient = {};
    this.commandeFournisseur = {};
    this.article = {
      codeArticle: '',
      quantite: 0,
      prixUnitaire: 0
    };
  }

  enregistrerCommande(): void {
    if (this.isCommandeClient) {
      this.cmdCltFrService.saveCommandeClient(this.commandeClient).subscribe(() => {
        // La commande client a été créée avec succès
        this.router.navigate(['/commandesclients']);
      });
    } else if (this.isCommandeFournisseur) {
      this.cmdCltFrService.saveCommandeFournisseur(this.commandeFournisseur).subscribe(() => {
        // La commande fournisseur a été créée avec succès
        this.router.navigate(['/commandesfournisseurs']);
      });
    }
  }

  annulerCommande(): void {
    this.router.navigate(['/commandesfournisseurs']);
  }


  ajouterArticle(): void {
    // Logique pour ajouter un article à la commande
  }
}
