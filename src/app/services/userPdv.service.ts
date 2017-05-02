import { Injectable }    from '@angular/core';


import { UserPdv } from '../models/userPdv';
import { UserPdvList } from '../mocks/mock-userPdv';



@Injectable()
export class UserPdvService {

  getUserPdvList(): Promise<UserPdv[]> {
    return Promise.resolve(UserPdvList);
  }
  
  getUserPdvListSlowly(): Promise<UserPdv[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getUserPdvList()), 2000);
    });
  }
 

  getUserPdv(id: number): UserPdv {
    return UserPdvList.find(userPdv => userPdv.id === id);
  }
  
  
 // getUserPdv(id: number): Promise<UserPdv> {
 //    return this.getUserPdvList().then(userPdvList => userPdvList.find(userPdv => userPdv.id === id));
 //  }

}
