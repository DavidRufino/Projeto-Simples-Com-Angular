import { NgModule } from "@angular/core";
import { StarComponent } from "./star.component";

@NgModule({
    declarations: [
        StarComponent
    ],
    exports: [
        //  Agora esse Component pode ser utilizado por todos os NgModule
        StarComponent
    ]
})
export class StarModule { }