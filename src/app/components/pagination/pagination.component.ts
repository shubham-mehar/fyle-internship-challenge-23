import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  @Input() reposPerPage: number = 10;
  @Input() totalItems: number = 0;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output() applyPerPage: EventEmitter<void> = new EventEmitter<void>();

  currentPage: number = 1;
  totalPages: number = 1;
  pages: number[] = [];

  
  applyRepositoriesPerPage(): void {
    this.applyPerPage.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalItems'] || changes['reposPerPage']) {
      this.calculateTotalPages();
      this.calculatePages();
      this.ensureValidCurrentPage();
    }
  }

  onPageChanged(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChanged.emit(this.currentPage);
    }
  }

  private calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.totalItems / this.reposPerPage);
  }

  private calculatePages(): void {
    this.pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.pages.push(i);
    }
  }

  private ensureValidCurrentPage(): void {
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
      this.pageChanged.emit(this.currentPage);
    }
  }
}
