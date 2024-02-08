import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechsOverviewPageComponent } from './techs-overview-page.component';

describe('TechsOverviewPageComponent', () => {
  let component: TechsOverviewPageComponent;
  let fixture: ComponentFixture<TechsOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechsOverviewPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechsOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
