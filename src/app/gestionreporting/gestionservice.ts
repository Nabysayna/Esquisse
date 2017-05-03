import { Injectable }    from '@angular/core';

import { HistoriqueOperations } from './gestionmodels';
import { HistoriqueOperationsList } from './gestionmock';

import { ArretCaisse } from './gestionmodels';
import { ArretCaisseList } from './gestionmock';

@Injectable()
export class HistoriqueOperationsService {

  getHistoriqueOperationsList(): Promise<HistoriqueOperations[]> {
    return Promise.resolve(HistoriqueOperationsList);
  }
  
  getHistoriqueOperations(id: number): HistoriqueOperations {
    return HistoriqueOperationsList.find(historiqueOperations => historiqueOperations.id === id);
  }

} 

@Injectable()
export class ArretCaisseService {

  getArretCaisseList(): Promise<ArretCaisse[]> {
    return Promise.resolve(ArretCaisseList);
  }
  
  getArretCaisse(id: number): ArretCaisse {
    return ArretCaisseList.find(arretCaisse => arretCaisse.id === id);
  }

} 