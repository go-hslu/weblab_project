import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDetailsPageComponent } from './tech-details-page.component';

describe('TechDetailsPageComponent', () => {
  let component: TechDetailsPageComponent;
  let fixture: ComponentFixture<TechDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
