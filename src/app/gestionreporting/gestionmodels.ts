export class HistoriqueOperations {
  constructor(
    public id:number,
    public date: string,
    public operateur: string,
    public traitement: string,
     public montant: number
   
  ) {  }
}

export class ArretCaisse {
  constructor(
    public id:number,
    public date: string,
    public operateur: string,
    public solde: number,
     public montantc: number,
     public debiteur:number,
     public crediteur:number
   
  ) {  }
}


