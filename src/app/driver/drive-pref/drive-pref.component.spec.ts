import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivePrefComponent } from './drive-pref.component';

describe('DrivePrefComponent', () => {
  let component: DrivePrefComponent;
  let fixture: ComponentFixture<DrivePrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivePrefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivePrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
