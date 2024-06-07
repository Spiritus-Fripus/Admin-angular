import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDelayComponent } from './manage-delay.component';

describe('ManageDelayComponent', () => {
  let component: ManageDelayComponent;
  let fixture: ComponentFixture<ManageDelayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageDelayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
