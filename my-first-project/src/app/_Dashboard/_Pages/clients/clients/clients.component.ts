import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CltFrsService } from 'src/app/services/cltfrs.service';
import { Client } from 'src/app/Models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = [];
  errorMsg: string | undefined;

  constructor(private router: Router, private cltFrsService: CltFrsService) {}

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients(): void {
    this.cltFrsService.getAllClients()
      .subscribe(
        clients => this.clients = clients,
        error => this.errorMsg = error.message
      );
  }

  nouveauClient(): void {
    this.router.navigate(['newclient']);
  }

  supprimerClient(id: number): void {
    this.cltFrsService.deleteClient(id)
      .subscribe(() => {
        this.clients = this.clients.filter(client => client.id !== id);
      });
  }

  afficherClient(id: number): void {
    this.router.navigate(['clients', id]);
  }

  modifierClient(id: number): void {
    this.router.navigate(['newclient', id]);
  }
}
