import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterstateComponent } from './interstate.component';

describe('InterstateComponent', () => {
  let component: InterstateComponent;
  let fixture: ComponentFixture<InterstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterstateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
