import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit page change when onPageChanged is called', () => {
    spyOn(component.pageChanged, 'emit');
    component.onPageChanged(2);
    expect(component.pageChanged.emit).toHaveBeenCalledWith(2);
  });

  it('should emit applyPerPage when applyRepositoriesPerPage is called', () => {
    spyOn(component.applyPerPage, 'emit');
    component.applyRepositoriesPerPage();
    expect(component.applyPerPage.emit).toHaveBeenCalled();
  });
});
