import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherItemsListComponent } from './weather-items-list.component';

describe('WeatherItemsListComponent', () => {
  let component: WeatherItemsListComponent;
  let fixture: ComponentFixture<WeatherItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
