import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      {
        //  path vazio estamos dizendo que é na url root (localhost:4200)
        //  Quando ele for para root da aplicação (localhost:4200) 
        //  ele redireciona para 'courses' url: localhost:4200/courses
        path: '', redirectTo: 'courses', pathMatch: 'full'
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
