import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomaddComponent } from './roomadd.component';

describe('RoomaddComponent', () => {
  let component: RoomaddComponent;
  let fixture: ComponentFixture<RoomaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomaddComponent]
    });
    fixture = TestBed.createComponent(RoomaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
