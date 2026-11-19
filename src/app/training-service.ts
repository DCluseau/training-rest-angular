import { Service } from '@angular/core';
import { TrainingInfo } from './training/traininginfo';

@Service()
export class TrainingService {
    // URL API spring
    url = 'http://localhost:8080/api/trainings';

    async getAllTrainings(): Promise<TrainingInfo[]>{
        const data = await fetch(this.url);
        const response = await data.json()
        return response;
    }

    async getTrainingById(id: number): Promise<TrainingInfo | undefined>{
        const data = await fetch(`${this.url}/${id}`);
        const trainingJson = await data.json();
        return trainingJson;
    }
}
