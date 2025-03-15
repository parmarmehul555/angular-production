import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArryCrudComponent } from './arry-crud.component';

describe('ArryCrudComponent', () => {
  let component: ArryCrudComponent;
  let fixture: ComponentFixture<ArryCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArryCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArryCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
