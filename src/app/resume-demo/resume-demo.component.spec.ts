import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDemoComponent } from './resume-demo.component';

describe('ResumeDemoComponent', () => {
  let component: ResumeDemoComponent;
  let fixture: ComponentFixture<ResumeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
