import { Component, OnInit } from '@angular/core';
import { DatasService } from 'src/app/servicios/datas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  miPortfolio:any="";
  
  constructor(private datosPortfolio:DatasService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPersona().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data;
    });
  }

}
