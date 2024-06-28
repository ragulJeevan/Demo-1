import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationLayoutComponent } from './foundation-layout.component';

describe('FoundationLayoutComponent', () => {
  let component: FoundationLayoutComponent;
  let fixture: ComponentFixture<FoundationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoundationLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoundationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
