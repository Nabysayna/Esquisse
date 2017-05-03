import { Injectable }    from '@angular/core';


import { EnvoiCash } from './jonimodels';
import { EnvoicashList } from './jonimock';

import { PaieCash } from './jonimodels';
import { PaiecashList } from './jonimock';


@Injectable()
export class EnvoicashService {

  getEnvoicashList(): Promise<EnvoiCash[]> {
    return Promise.resolve(EnvoicashList);
  }
  
  getEnvoicash(id: number): EnvoiCash {
    return EnvoicashList.find(envoiCash => envoiCash.id === id);
  }

}

@Injectable()
export class PaiecashService {

  getPaiecashList(): Promise<PaieCash[]> {
    return Promise.resolve(PaiecashList);
  }
  
  getPaieCash(idf: number): PaieCash {
    return PaiecashList.find(paieCash => paieCash.idf === idf);
  }

}



