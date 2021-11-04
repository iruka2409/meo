import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeoComponent } from './meo.component';

describe('MeoComponent', () => {
  let component: MeoComponent;
  let fixture: ComponentFixture<MeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
