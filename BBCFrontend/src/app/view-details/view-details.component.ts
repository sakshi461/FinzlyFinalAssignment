import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  obj:any=<customer>{};
  name="sakshi"

  constructor(private router : Router,private service:HttpService) { }

  ngOnInit(): void {
    this.loaddetails();
  }

  gotoDashboard(){
    this.router.navigate(['/dash-board']);
    }

    loaddetails(){
      let id=sessionStorage.getItem("id");
      this.service.viewDetails(id).subscribe((response:any)=>{
        this.obj=response;
        console.log(response)
        console.log(this.obj);
      })
      console.log("entered"+this.obj)

    }
   
}
