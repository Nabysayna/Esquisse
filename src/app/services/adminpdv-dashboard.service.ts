import { Injectable }    from '@angular/core';


import { AdminpdvDashboard } from '../models/adminpdv-dashboard';
import { AdminpdvDashboardMock } from '../mocks/adminpdv-dashboard.mock';



@Injectable()
export class AdminpdvDashboardService {

  getAdminpdvDashboardMock(): Promise<AdminpdvDashboard[]> {
    return Promise.resolve(AdminpdvDashboardMock);
  }
  
  getAdminpdvDashboardMockSlowly(): Promise<AdminpdvDashboard[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getAdminpdvDashboardMock()), 2000);
    });
  }
 

  getAdminpdvDashboard(id: number): Promise<AdminpdvDashboard> {
    return this.getAdminpdvDashboardMock().then(adminpdvDashboardMock => adminpdvDashboardMock.find(adminpdvDashboard => adminpdvDashboard.id === id));
  }
  
  

}
