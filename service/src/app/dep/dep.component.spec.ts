import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DEPComponent } from './dep.component';

describe('DEPComponent', () => {
  let component: DEPComponent;
  let fixture: ComponentFixture<DEPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DEPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DEPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
