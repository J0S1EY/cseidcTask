import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CseidcComponent } from './cseidc.component';

describe('CseidcComponent', () => {
  let component: CseidcComponent;
  let fixture: ComponentFixture<CseidcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CseidcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CseidcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
