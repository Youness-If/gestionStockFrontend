import { AdresseDto } from "./AdresseDto";
import { CommandeClient } from "./CommandeClient";

export interface Client {
  id?: number;
  nom?: string;
  prenom?: string;
  mail?: string;
  numTel?: string;
}
