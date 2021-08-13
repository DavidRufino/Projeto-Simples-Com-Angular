import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { CommonModule } from "@angular/common";
import { StarModule } from "../shared/component/star/star.module";
import { PipeModule } from "../shared/pipe/app-pipe.module";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        PipeModule,
        RouterModule.forChild([
            {
                //  Quando for para a url localhost:4200/courses
                //  sera redirecionado para a roda de CourseListComponent
                //  mas precisa ainda de um "switch"
                path: 'courses', component: CourseListComponent
              },
              {
                //  em url localhost:4200/courses/info e um path variable
                //  chame component CourseInfoComponent
                path: 'courses/info/:id', component: CourseInfoComponent
              }
        ])
    ]
})
export class CourseModule { }