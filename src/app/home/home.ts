import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {Training} from '../training/training';
import {TrainingInfo} from '../training/traininginfo';
import { TrainingService } from '../training-service';

@Component({
    selector: 'app-home',
    imports: [Training],
    template:`
    <section>
        @for (training of trainingList; track $index){
            <app-training [training]="training" />
        }
    </section>
    `
})

export class Home{
    private readonly changeDetectorRef = inject(ChangeDetectorRef);
    trainingList: TrainingInfo[] = [];

    trainingService: TrainingService = inject(TrainingService);
    constructor(){
        this.trainingService
            .getAllTrainings()
            .then((trainingList: TrainingInfo[]) => {
                this.trainingList = trainingList;
                this.changeDetectorRef.markForCheck();
        });
    }
}