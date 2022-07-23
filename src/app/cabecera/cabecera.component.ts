import { Component, OnInit } from '@angular/core';

@Component({
  selector: '/app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  strAcerca:string = "Album fotográfico"
  strInfo:string = "A través de mis ojos"

}
