import {Routes} from '@angular/router';
import {Training} from './training/training';
import {Home} from './home/home';

const routeConfig: Routes = [
    {
        path: '',
        component: Home,
        title: 'Cours'
    },
    {
        path: 'trainings/:id',
        component: Training,
        title: 'Détails'
    }
];

export default routeConfig;