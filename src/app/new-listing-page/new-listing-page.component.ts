import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css'],
})
export class NewListingPageComponent implements OnInit {
  name: string = '';
  description: string = '';
  price: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
  }

  onSubmit(): void {
    alert('Creating a new listing...');
    this.router.navigateByUrl('/my-listings');
  }
}
