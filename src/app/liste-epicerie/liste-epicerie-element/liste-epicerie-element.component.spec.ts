import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEpicerieElementComponent } from './liste-epicerie-element.component';

describe('ListeEpicerieElementComponent', () => {
  let component: ListeEpicerieElementComponent;
  let fixture: ComponentFixture<ListeEpicerieElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeEpicerieElementComponent]
    });
    fixture = TestBed.createComponent(ListeEpicerieElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
