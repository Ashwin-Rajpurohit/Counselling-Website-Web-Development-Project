import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngerComponent } from './anger.component';

describe('AngerComponent', () => {
  let component: AngerComponent;
  let fixture: ComponentFixture<AngerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
