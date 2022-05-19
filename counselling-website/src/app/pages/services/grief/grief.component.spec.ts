import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GriefComponent } from './grief.component';

describe('GriefComponent', () => {
  let component: GriefComponent;
  let fixture: ComponentFixture<GriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GriefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
