import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'buy-sell';
  newMemberName = '';
  members: string[] = [];
  errorMsg = '';

  onInput(value: string) {
    this.newMemberName = value;
  }

  addMember() {
    if (!this.newMemberName) {
      this.errorMsg = "Name can't be empty!";
      return;
    }
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    this.errorMsg = '';
  }
}
