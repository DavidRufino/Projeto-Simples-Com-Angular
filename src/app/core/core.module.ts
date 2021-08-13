import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404component } from "../shared/component/error-404/error-404.component";
import { NavBarComponent } from "../shared/component/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent,
        Error404component
    ],
    imports: [
        RouterModule.forChild([
            {
                //  esta path, caso nao exista a url informada,
                //  sera redirecionado para o component 'Error404component'
                path: '**', component: Error404component
            }
        ])
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule {}