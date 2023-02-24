import { Component } from '@angular/core';

@Component({
    selector: "app-counter",
    templateUrl: "counter.component.html",
    styleUrls: ["counter.component.css"]
})
export class CounterComponent
{
    public intBase: number = 5;
    public intCounter: number = 0;

    public UpdateCounter(intCounter: number): void
    {
        this.intCounter += intCounter;
    }
}