import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CltFrsService } from 'src/app/services/cltfrs.service';
import { Client } from 'src/app/Models/Client';
import { Fournisseur } from 'src/app/Models/Fournisseur';

@Component({
  selector: 'app-new-clt-frs',
  templateUrl: './new-clt-frs.component.html',
  styleUrls: ['./new-clt-frs.component.css']
})
export class NewCltFrsComponent implements OnInit {

  newCltFrsForm!: FormGroup;
  isSubmitted = false;
  errorMessage!: string;
  origin!: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private cltFrsService: CltFrsService) { }

  ngOnInit() {
    this.newCltFrsForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      numTel: ['', Validators.required]
    });
    this.origin = this.router.url.split('/')[1]; // get origin (client or fournisseur)
  }

  // convenience getter for easy access to form fields
  get f() { return this.newCltFrsForm.controls; }

  onSubmit() {
    this.isSubmitted = true;

    // stop here if form is invalid
    if (this.newCltFrsForm.invalid) {
      return;
    }

    // create new client
    if (this.origin === 'newclient') {
      let newClient: Client = {
        nom: this.f['nom'].value,
        prenom: this.f['prenom'].value,
        mail: this.f['mail'].value,
        numTel: this.f['numTel'].value
      };
      this.cltFrsService.saveClient(newClient).subscribe(
        data => {
          this.router.navigate(['/client']);
        },
        error => {
          this.errorMessage = error.message;
        }
      );
    }

    // create new fournisseur
    if (this.origin === 'newfournisseur') {
      let newFournisseur: Fournisseur = {
        nom: this.f['nom'].value,
        prenom: this.f['prenom'].value,
        mail: this.f['mail'].value,
        numTel: this.f['numTel'].value
      };
      this.cltFrsService.saveFournisseur(newFournisseur).subscribe(
        data => {
          this.router.navigate(['/fournisseurs']);
        },
        error => {
          this.errorMessage = error.message;
        }
      );
    }
  }

  cancelClick(): void {
    this.router.navigate(['/client']);
  }
}
