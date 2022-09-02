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
  numberOfTeams: number | '' = '';

  onAddMemberInput(value: string) {
    this.newMemberName = value;
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
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
