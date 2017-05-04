import { Injectable }    from '@angular/core';

import { DemandePret } from './demandemodels';
import { DemandePretList } from './demandemock';


@Injectable()
export class DemandePretService {

  getDemandePretList(): Promise<DemandePret[]> {
    return Promise.resolve(DemandePretList);
  }
  
  getDemandePret(id: number): DemandePret {
    return DemandePretList.find(demandePret => demandePret.id === id);
  }

}
