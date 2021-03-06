import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Site, Type } from './site';
import { httpOptions} from './auth.service';
import { Role } from './worker';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  //sites: Site[] = [{
  //  id: 1,
  //  name: 'Keleti pályaudvar',
  //  address: 'Budapest, Kerepesi út 2-4',
  //  type: Type.FACTORY,
  //}, {
  //    id: 2,
  //    name: 'Nyugati szárny',
  //    address: 'Győr, Dér utca 3/e',
  //    type: Type.HR,
  //    workers: [{
  //      id: 1,
  //      name: 'Kovács Miklós',
  //      email: 'kovos@example.com',
  //      password: 'asdasd',
  //      payment: 20000,
  //     role: Role.Employee
  //    }, {
  //      id: 2,
  //      name: 'Tavaszi Katalin',
  //      email: 'tavasz@example.com',
  //      password: 'spring',
  //      payment: 30000,
  //      role: Role.Employer
  //    }],
  //    materials:[{
  //      id: 1,
  //      name:'Laptop',
  //      quantity: 10,
  //    },{
  //      id: 2,
  //      name: 'Tégla',
  //      quantity: 15000
  //    }]
  //}]

  private sitesUrl='http://localhost:8080/sites';

  constructor(
    private httpClient: HttpClient
  ) { }

  getSites(): Promise<Site[]> {
    // return this.sites;
    return this.httpClient.get<Site[]>(`${this.sitesUrl}`, httpOptions).toPromise();
  }
 

  getSite(id: number): Promise<Site> {
    return this.httpClient.get<Site>(`${this.sitesUrl}/${id}`, httpOptions).toPromise();
  }
  
  createSite(site: Site): Promise<Site>{
    return this.httpClient.post<Site>(`${this.sitesUrl}`, site, httpOptions).toPromise();
  }

  editSite(id: number, site: Site): Promise<Site> {
    return this.httpClient.put<Site>(`${this.sitesUrl}/${id}`, site, httpOptions).toPromise();
  }

  deleteSite(id:number):Promise<Site>{
    return this.httpClient.delete<Site>(`${this.sitesUrl}/${id}`, httpOptions).toPromise();
  }
}
