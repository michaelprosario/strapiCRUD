import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTimeEntriesComponent } from './list-time-entries.component';

describe('ListTimeEntriesComponent', () => {
  let component: ListTimeEntriesComponent;
  let fixture: ComponentFixture<ListTimeEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTimeEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTimeEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
