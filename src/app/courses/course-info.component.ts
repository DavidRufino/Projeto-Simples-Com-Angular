import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{
    
    //  Receber o Path variable
    course?: Course;
    
    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {  }

    ngOnInit(): void {
        this.courseService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe({
            next: course => this.course = course,
            error: err => console.log("Error: ", err)
        });
    }

    save(): void {
        //  tem que adicionar .susbcribe para realizar esta chamada
        this.courseService.save(this.course as Course).subscribe({
            next: course => console.log("Saved with sucess", course),
            error: err => console.log("Error", err)
        })
    }
}