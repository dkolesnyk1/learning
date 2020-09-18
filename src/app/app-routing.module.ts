import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServerResolver } from './servers/server-resolver.service';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { UsersModule } from './users/users.module';



const routes: Routes = [    
    {
        path: 'servers',
        component: ServersComponent,
    },
    
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}