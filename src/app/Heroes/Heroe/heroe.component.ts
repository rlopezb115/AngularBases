import { Component } from '@angular/core';

@Component({
    selector: "app-heroe",
    templateUrl: "heroe.component.html"
})
export class HeroeComponent
{
    private strNombre   : string = "Superman";
    private intEdad     : number = 15;
    private strVestuario: string = "Tiene Capa y Botas";

    public get Nombre(): string
    {
        return this.strNombre;
    }

    public get Edad(): number
    {
        return this.intEdad;
    }

    public get Vestuario(): string
    {
        return this.strVestuario;
    }

    public actualizarNombre(): void
    {
        this.strNombre = "Superman Recargado";
    }

    public actualizarEdad(): void
    {
        this.intEdad = 30;
    }

    public actualizarVestuario(): void
    {
        this.strVestuario = "Traje ajustado con capa, cinturon y botas";
    }

    public cambiarHeroe(): void
    {
        this.strNombre = "Hulk";
        this.intEdad   = 40;
        this.strVestuario = "short";
    }
}