import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServersService,  } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRouter.data.subscribe((data) => {
      console.log(data.server);
      
      this.server = data.server;
    })
  }

  public getBack() {
    this.router.navigate(['/servers'], { relativeTo: this.activatedRouter });
  }

}
