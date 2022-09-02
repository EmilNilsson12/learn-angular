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
  teams: string[][] = [[]];

  onAddMemberInput(value: string) {
    this.newMemberName = value;
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMsg = "Invalid number of teams!";
      return;
    }

    if (this.members.length < this.numberOfTeams) {
      this.errorMsg = "Not enough members!";
      return;
    }

    const allMembers = [...this.members];

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];

        if (!member) continue;

        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    console.log(this.teams);

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
