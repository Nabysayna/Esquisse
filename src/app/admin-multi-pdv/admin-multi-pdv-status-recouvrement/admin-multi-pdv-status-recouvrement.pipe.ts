import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilterAdminmultipdvStatusRecouvrement"
})
export class AdminmultipdvStatusRecouvrementPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
			return _.filter(array, row=>{ return  (row.daterecouvrement.toLowerCase().indexOf(query.toLowerCase())>-1 || row.agent.toLowerCase().indexOf(query.toLowerCase())>-1 || row.telephone.toLowerCase().indexOf(query.toLowerCase())>-1 || row.adresse.toLowerCase().indexOf(query.toLowerCase())>-1  ) } );
        }
        return array;
    }
}

