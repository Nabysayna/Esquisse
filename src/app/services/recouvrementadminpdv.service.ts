import { Injectable }    from '@angular/core';


import { Recouvrementadminpdv } from '../models/recouvrementadminpdv';
import { RecouvrementadminpdvMock } from '../mocks/recouvrementadminpdv.mock';



@Injectable()
export class RecouvrementadminpdvService {

  getRecouvrementadminpdvMock(): Promise<Recouvrementadminpdv[]> {
    return Promise.resolve(RecouvrementadminpdvMock);
  }
  
  getMonitoringDepositAdminpdvMockSlowly(): Promise<Recouvrementadminpdv[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getRecouvrementadminpdvMock()), 2000);
    });
  }
  
  getRecouvrementadminpdv(id: number): Recouvrementadminpdv {
    return RecouvrementadminpdvMock.find(recouvrementadminpdv => recouvrementadminpdv.id === id);
  }
  
  

}
