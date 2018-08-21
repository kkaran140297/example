import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsConfigComponent } from './about-us-config.component';

describe('AboutUsConfigComponent', () => {
  let component: AboutUsConfigComponent;
  let fixture: ComponentFixture<AboutUsConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
