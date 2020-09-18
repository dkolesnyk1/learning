import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { UserRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.component";



@NgModule({
    declarations: [
        UsersComponent,
        UserComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        RouterModule
    ],
    exports: [
        UsersComponent
    ],
})

export class UsersModule {}