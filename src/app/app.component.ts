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

  onInput(value: string) {
    this.newMemberName = value;
  }

  addMember() {
    console.log('Clicked event');
    if (this.newMemberName !== '') {
      this.members.push(this.newMemberName);
      console.log(this.members);
      this.newMemberName = '';
    }
  }
}
