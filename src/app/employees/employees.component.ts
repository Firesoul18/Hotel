import { Component } from '@angular/core';
import { employee } from './employee';

@Component({
  selector: 'hotel-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent {
    employees:employee[]=[
      {
        name:"hiind",
        age:18,
        id:"Dddds",
        phone:"123",
        yearsworking:1,
        email:"dash@gmail.com",
        address:"12, RamSinghNagar, Jaipur"
      },
      {
        name:"hiind",
        age:19,
        id:"Dddds",
        phone:"123",
        yearsworking:1,
        email:"dash@gmail.com",
        address:"12, RamSinghNagar, Jaipur"
      }

    ];
}
