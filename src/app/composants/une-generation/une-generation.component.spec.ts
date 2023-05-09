import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UneGenerationComponent } from './une-generation.component';

describe('UneGenerationComponent', () => {
  let component: UneGenerationComponent;
  let fixture: ComponentFixture<UneGenerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UneGenerationComponent]
    });
    fixture = TestBed.createComponent(UneGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
