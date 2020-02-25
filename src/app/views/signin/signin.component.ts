import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  users: any[] = [];


  constructor( private dataService: DataService) { }

  ngOnInit() {

    /*this.dataService.getUsers().subscribe((data: any[]) => {
      console.log(data);
      this.users = data;
    });*/
  }

}
