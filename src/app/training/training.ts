import {Component, input} from '@angular/core';
import {TrainingInfo} from './traininginfo';
import {RouterLink} from '@angular/router';

@Component({
    imports: [RouterLink],
    selector: 'app-training',
    template:`
    <section class="">
        <h2>{{ training().name }}</h2>
        <ul>
            <li>{{ training().description }}</li>
            <li>{{ training().price }}</li>
            <li>{{ training().quantity }}</li>
        </ul>
        <a [routerLink]="['/details', training().id]">En savoir plus</a>
    </section>
    `
})

export class Training{
    training = input.required<TrainingInfo>();
}