import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CltFrsService } from 'src/app/services/cltfrs.service';
import { Client } from 'src/app/Models/Client';
import { Fournisseur } from 'src/app/Models/Fournisseur';

@Component({
  selector: 'app-details-cl-frs',
  templateUrl: './details-cl-frs.component.html',
  styleUrls: ['./details-cl-frs.component.css']
})
export class DetailsClFrsComponent implements OnInit {

  client: Client | undefined;
  fournisseur: Fournisseur | undefined;
  type: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private cltFrsService: CltFrsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.type = this.route.snapshot.paramMap.get('type');

    if (this.type === 'client') {
      if (id !== undefined && typeof id === "string") {
        this.getClientById(parseInt(id));
      }
    } else {
      if (id !== undefined && typeof id === "string") {
        this.getFournisseurById(parseInt(id));
      }
    }
  }

  getClientById(id: number): void {
    this.cltFrsService.getClientById(id)
      .subscribe(client => this.client = client);
  }

  getFournisseurById(id: number): void {
    this.cltFrsService.getFournisseurById(id)
      .subscribe(fournisseur => this.fournisseur = fournisseur);
  }

  deleteClient(id: number): void {
    if (id !== undefined) {
      this.cltFrsService.deleteClient(id)
        .subscribe(() => {
          this.router.navigate(['/clients']);
        });
    }
  }

  deleteFournisseur(id: number): void {
    if (id !== undefined) {
      this.cltFrsService.deleteFournisseur(id)
        .subscribe(() => {
          this.router.navigate(['/fournisseurs']);
        });
    }
  }

  updateClient(id: number): void {
    if (id !== undefined) {
      this.router.navigate(['/newclient', id]);
    }
  }

  updateFournisseur(id: number): void {
    if (id !== undefined) {
      this.router.navigate(['/newfournisseur', id]);
    }
  }
}
