import { Injectable }    from '@angular/core';

import { AchatJula } from './postmodels';
import { AchatJulaList } from './postmock';

import { ReglSenelec } from './postmodels';
import { ReglSenelecList } from './postmock';

import { AchatCodeWoyofal } from './postmodels';
import { AchatCodeWoyofalList } from './postmock';

@Injectable()
export class AchatJulaService {

  getAchatJulaList(): Promise<AchatJula[]> {
    return Promise.resolve(AchatJulaList);
  }
  
  getAchatJula(id: number): AchatJula {
    return AchatJulaList.find(achatJula => achatJula.id === id);
  }

} 


@Injectable()
export class ReglSenelecService {

  getRelSenelecList(): Promise<ReglSenelec[]> {
    return Promise.resolve(ReglSenelecList);
  }
  
  getReglSenelec(id: number): ReglSenelec {
    return ReglSenelecList.find(reglsenelec => reglsenelec.id === id);
  }

} 


@Injectable()
export class AchatCodeWoyofalService {

  getAchatCodeWoyofalList(): Promise<AchatCodeWoyofal[]> {
    return Promise.resolve(AchatCodeWoyofalList);
  }
  
  getAchatCodeWoyofal(id: number): AchatCodeWoyofal {
    return AchatCodeWoyofalList.find(achatCodeWoyofal => achatCodeWoyofal.id === id);
  }

} 