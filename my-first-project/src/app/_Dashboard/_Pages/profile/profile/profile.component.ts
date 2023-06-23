import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Utilisateur } from 'src/app/Models/Utilisateure';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: Utilisateur;

  constructor(private router: Router, private userService: UserService){
    this.user = this.userService.getConnectedUser();
  }

  modifierMotDePasse(){
    this.router.navigate(['/changermotdepasse']);
  }

  logout(){
    this.userService.logout();
  }
}
