import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";


@Pipe({
  name: 'filtrerelance'
})
export class FiltrerelancePipe implements PipeTransform {

 transform(dataTab: any[], filtre: string): any {
    if (filtre){
	    return _.filter(dataTab, row=>{ return  (row.noms.toLowerCase().indexOf(filtre.toLowerCase())>-1 || row.prenoms.toLowerCase().indexOf(filtre.toLowerCase())>-1 || row.tels.toString().toLowerCase().indexOf(filtre.toLowerCase())>-1 || row.service.toLowerCase().indexOf(filtre.toLowerCase())>-1 || row.echeance.toLowerCase().indexOf(filtre.toLowerCase())>-1) } );
    }
    return dataTab ;
  }

}
