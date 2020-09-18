import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "./servers.service";

@Injectable({ providedIn: 'root' })
export class ServerResolver implements Resolve<any> {
  constructor(private service: ServersService) {}

  resolve(      
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    
      return this.service.getServer(+route.paramMap.get('id'));
  }
}