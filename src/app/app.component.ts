import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sitioAngular';
  mensaje:string = "Este es un mensaje"
  terminos:any[] = [
    {
    "palabra":"fork",
    "significado":"Copia de un proyecto en una dirección distinta en el repositorio",
    "enlace":"https://es.wikipedia.org/wiki/Bifurcación_(desarrollo_de_software)",
    "autor":"Autor 1"
    },
    {
    "palabra":"saas",
    "significado":"'Software as a Service', mediante un navegador web se accede a un software el cual se enceuntra alojado en servidores del proveedor",
    "enlace":" http://www.portalsaas.com/que-es-saas-software-as-a-service.php",
    "autor":"Autor 2"
    },
  ]
}

