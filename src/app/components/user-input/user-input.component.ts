import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent {
  @Output() searchUsername: EventEmitter<string> = new EventEmitter<string>();
  @Input() user: any;
  username: string = '';

  onSubmit() {
    this.searchUsername.emit(this.username);
  }
}
