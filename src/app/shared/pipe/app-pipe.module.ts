import { NgModule } from "@angular/core";
import { CustomReplacePipe } from "./replace.pipe";

@NgModule({
    declarations: [
        CustomReplacePipe
    ],
    exports: [
        //  Agora esse Component pode ser utilizado por todos os NgModule
        CustomReplacePipe
    ]
})
export class PipeModule { }