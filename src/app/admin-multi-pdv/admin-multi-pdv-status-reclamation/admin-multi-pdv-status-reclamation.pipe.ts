import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilter"
})
export class AdminmultipdvStatusReclamationPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
			return _.filter(array, row=>{ return  (row.datereclamation.toLowerCase().indexOf(query.toLowerCase())>-1 || row.pdv.toLowerCase().indexOf(query.toLowerCase())>-1 || row.telephone.toLowerCase().indexOf(query.toLowerCase())>-1 || row.adresse.toLowerCase().indexOf(query.toLowerCase())>-1 || row.message.toLowerCase().indexOf(query.toLowerCase())>-1 || row.etat.toLowerCase().indexOf(query.toLowerCase())>-1    ) } );
        }
        return array;
    }
}

