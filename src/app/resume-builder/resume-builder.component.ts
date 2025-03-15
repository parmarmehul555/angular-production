import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-resume-builder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-builder.component.html',
  styleUrl: './resume-builder.component.css'
})
export class ResumeBuilderComponent {
  blank: any = { projects: [] }
  project: any = {}

  private searchService = inject(SearchService);

  val:any=null

  ngOnInit() {
    this.searchService.searchTerm$.subscribe((term) => {
      console.log("Updated term is ",term);
      this.val = term;
    });
  }

  dataFill(e: any) {
    const { name, value } = e.target
    this.blank = { ...this.blank, [name]: value }
  }

  projectFill(e: any) {
    const { name, value } = e.target
    this.project = { ...this.project, [name]: value }
  }

  onSubmit(e: any) {
    e.preventDefault()
    if (this.project.projname == undefined || this.project.projname === '') {
      alert("Please enter project name")
    }
    else if (this.project.projdesc == undefined || this.project.projdesc === '') {
      alert("Please enter project discription")
    }
    else if (this.project.projduration == undefined || this.project.projduration === '') {
      alert("Please add project duration")
    }
    else {
      this.blank.projects.push(this.project)
    }
  }
}
