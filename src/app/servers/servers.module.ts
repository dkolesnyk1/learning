import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EditServerComponent } from "./edit-server/edit-server.component";
import { ServerComponent } from "./server/server.component";
import { ServersRoutingModule } from "./servers-routing.module";
import { ServersComponent } from "./servers.component";

@NgModule({
    declarations: [ServersComponent, ServerComponent, EditServerComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ServersRoutingModule
    ],
    exports: [
        ServersComponent
    ]
})

export class ServersModule {}