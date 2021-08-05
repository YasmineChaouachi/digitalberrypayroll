export interface  Employee{
  id:number;
  Nom: string;
  prenom:string;
  position:string;
  date:string;
  rubrique: Rubrique[];
}
export interface Rubrique{
  nom:string;
  contenu:string;

}
