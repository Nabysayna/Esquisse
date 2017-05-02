import { Injectable }    from '@angular/core';


import { EnvoiCash } from './jonimodels';
import { EnvoicashList } from './jonimock';


@Injectable()
export class EnvoicashService {

  getEnvoicashList(): Promise<EnvoiCash[]> {
    return Promise.resolve(EnvoicashList);
  }
  
  getEnvoicash(id: number): EnvoiCash {
    return EnvoicashList.find(envoiCash => envoiCash.id === id);
  }

}


