import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddedMoviesPage } from './added-movies.page';

describe('AddedMoviesPage', () => {
  let component: AddedMoviesPage;
  let fixture: ComponentFixture<AddedMoviesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddedMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
