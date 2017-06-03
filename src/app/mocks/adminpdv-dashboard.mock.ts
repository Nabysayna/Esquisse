import { AdminpdvDashboard } from '../models/adminpdv-dashboard';

export const AdminpdvDashboardMock: AdminpdvDashboard[] = [
  { id: 1, typeService: 'Post-Cash',  nombreOperation: 100,  montantRecu: 400000, montantDonne: 50000, montantTotal: 900000},  
  { id: 2, typeService: 'Joni-Joni',  nombreOperation: 150,  montantRecu: 500000, montantDonne: 250000, montantTotal: 750000},  
  { id: 3, typeService: 'TNT',  nombreOperation: 250,  montantRecu: 900000, montantDonne: 450000, montantTotal: 1350000},  
  { id: 4, typeService: 'Expresso-Cash',  nombreOperation: 100,  montantRecu: 400000, montantDonne: 250000, montantTotal: 650000}  
];