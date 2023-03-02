import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerConfirmComponent } from './influencer-confirm.component';

describe('InfluencerConfirmComponent', () => {
  let component: InfluencerConfirmComponent;
  let fixture: ComponentFixture<InfluencerConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluencerConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfluencerConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
