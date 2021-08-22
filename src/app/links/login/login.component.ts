import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  states: string[] = [
    'Empresa 1','Empresa 2','Empresa 3','Empresa 4','Empresa 5','Empresa 6',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
