export interface  Employee{
  id:number;
  Nom: string;
  prenom:string;
  position:string;
  date:string;
  rubrique:Array<Rubrique>;
}
export interface Rubrique{
  nom:string;
  contenu:string;

}
