import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayOfObjectComponent } from './array-of-object.component';

describe('ArrayOfObjectComponent', () => {
  let component: ArrayOfObjectComponent;
  let fixture: ComponentFixture<ArrayOfObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayOfObjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrayOfObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
