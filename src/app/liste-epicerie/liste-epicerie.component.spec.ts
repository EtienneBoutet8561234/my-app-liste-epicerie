import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEpicerieComponent } from './liste-epicerie.component';

describe('ListeEpicerieComponent', () => {
  let component: ListeEpicerieComponent;
  let fixture: ComponentFixture<ListeEpicerieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeEpicerieComponent]
    });
    fixture = TestBed.createComponent(ListeEpicerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
