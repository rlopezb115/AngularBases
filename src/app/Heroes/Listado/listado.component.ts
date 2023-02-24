import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  public newHeroes    : string[] = ['Spiderman', 'Hulk', 'Capitan America', 'Thor', 'Xmen'];
  public deletedHeroes: string[] = []; 

  public eliminarSuperheroe() :void
  {
    const deleteHeroe = this.newHeroes.shift() || "";
    if (this.newHeroes.length > 0)
      this.deletedHeroes.push(deleteHeroe);
  }
}
