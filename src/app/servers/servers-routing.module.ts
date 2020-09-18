import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServerResolver } from "./server-resolver.service";
import { ServerComponent } from "./server/server.component";

const routes: Routes = [
    {
        path: 'servers',
        children: [
            { 
                path: 'server/:id', component: ServerComponent, 
                resolve: {
                    server: ServerResolver
                }
            }
        ]
    }
]


@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})

export class ServersRoutingModule {}