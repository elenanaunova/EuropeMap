import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeMapComponent } from './europe-map.component';

describe('EuropeMapComponent', () => {
  let component: EuropeMapComponent;
  let fixture: ComponentFixture<EuropeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuropeMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
