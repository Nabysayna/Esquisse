import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";


@Pipe({
  name: 'filtrehistoriqueOperations'
})
export class FiltrehistoriqueOperationsPipe implements PipeTransform {

 transform(dataTab: any[], filtre: string): any {
    if (filtre){
	    return _.filter(dataTab, row=>{ return  (row.date.toString().toLowerCase().indexOf(filtre.toLowerCase())>-1 || row.operateur.toLowerCase().indexOf(filtre.toLowerCase())>-1 || row.traitement.toLowerCase().indexOf(filtre.toLowerCase())>-1 || row.montant.toString().toLowerCase().indexOf(filtre.toLowerCase())>-1 ) } );
    }
    return dataTab ;
  }

}
