import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  gotoDashboard(){
    this.router.navigate(['/dash-board']);
    }
   
}
