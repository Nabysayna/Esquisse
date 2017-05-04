import { Injectable }    from '@angular/core';


import { ConsommationDepositParServiceType } from '../models/consommationdepositparservicetype';
import { ConsommationDepositParServiceTypeMock } from '../mocks/consommationdepositparservicetype.mock';



@Injectable()
export class ConsommationDepositParServiceTypeService {

  getConsommationDepositParServiceTypeMock(): Promise<ConsommationDepositParServiceType[]> {
    return Promise.resolve(ConsommationDepositParServiceTypeMock);
  }
  
  getMonitoringDepositAdminpdvMockSlowly(): Promise<ConsommationDepositParServiceType[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getConsommationDepositParServiceTypeMock()), 2000);
    });
  }
  
  getConsommationDepositParServiceType(id: number): ConsommationDepositParServiceType {
    return ConsommationDepositParServiceTypeMock.find(consommationdepositparservicetype => consommationdepositparservicetype.id === id);
  }
  
  

}
