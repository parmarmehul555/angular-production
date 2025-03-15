import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-demo',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './resume-demo.component.html',
  styleUrl: './resume-demo.component.css'
})
export class ResumeDemoComponent {
  stu:any={
    projects:[]
  }


  tempProject={}

  dataFill(e:any){
    this.stu={...this.stu,[e.target.name]:e.target.value}
  }

  projectData(e:any){
    this.tempProject={...this.tempProject,[e.target.name]:e.target.value}
  }

  addDetail(){
    this.stu.projects.push(this.tempProject)
  }

}
