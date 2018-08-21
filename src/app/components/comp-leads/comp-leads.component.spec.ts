import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompLeadsComponent } from './comp-leads.component';

describe('CompLeadsComponent', () => {
  let component: CompLeadsComponent;
  let fixture: ComponentFixture<CompLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
