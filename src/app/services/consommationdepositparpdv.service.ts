import { Injectable }    from '@angular/core';


import { ConsommationDepositParPdv } from '../models/consommationdepositparpdv';
import { ConsommationDepositParPdvMock } from '../mocks/consommationdepositparpdv.mock';



@Injectable()
export class ConsommationDepositParPdvService {

  getConsommationDepositParPdvMock(): Promise<ConsommationDepositParPdv[]> {
    return Promise.resolve(ConsommationDepositParPdvMock);
  }
  
  getMonitoringDepositAdminpdvMockSlowly(): Promise<ConsommationDepositParPdv[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getConsommationDepositParPdvMock()), 2000);
    });
  }
  
  getConsommationDepositParPdv(id: number): ConsommationDepositParPdv {
    return ConsommationDepositParPdvMock.find(consommationdepositparpdv => consommationdepositparpdv.id === id);
  }
  
  

}
