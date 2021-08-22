import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  hide = true;

  states: string[] = [
    'Empresa 1','Empresa 2','Empresa 3','Empresa 4','Empresa 5','Empresa 6',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
