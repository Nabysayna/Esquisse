import { Injectable }    from '@angular/core';


import { MonitoringDepositAdminpdv } from '../models/monitoringdepositadminpdv';
import { MonitoringDepositAdminpdvMock } from '../mocks/monitoringdepositadminpdv.mock';



@Injectable()
export class MonitoringDepositAdminpdvService {

  getMonitoringDepositAdminpdvMock(): Promise<MonitoringDepositAdminpdv[]> {
    return Promise.resolve(MonitoringDepositAdminpdvMock);
  }
  
  getMonitoringDepositAdminpdvMockSlowly(): Promise<MonitoringDepositAdminpdv[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getMonitoringDepositAdminpdvMock()), 2000);
    });
  }
  
  getMonitoringDepositAdminpdv(id: number): MonitoringDepositAdminpdv {
    return MonitoringDepositAdminpdvMock.find(monitoringDepositAdminpdv => monitoringDepositAdminpdv.id === id);
  }
  
  

}
