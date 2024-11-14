import { InstrumentsPageComponent } from './body/instruments-page/instruments-page.component';
import { ExercisesPageComponent } from './body/exercises-page/exercises-page.component';
import { Routes } from '@angular/router';
import { MainPageComponent } from './body/main-page/main-page.component';
import { DrumsPageComponent } from './body/drums-page/drums-page.component';
import { PianoPageComponent } from './body/piano-page/piano-page.component';

export const routes: Routes = [
    { 
        path: '',
        pathMatch: 'full',
        component: MainPageComponent
    },
    { 
        path: 'exercises',
        pathMatch: 'full',
        component: ExercisesPageComponent
    },
    { 
        path: 'instruments',
        pathMatch: 'full',
        component: InstrumentsPageComponent
    },
    { 
        path: 'piano',
        pathMatch: 'full',
        component: PianoPageComponent
    },
    { 
        path: 'drums',
        pathMatch: 'full',
        component: DrumsPageComponent
    },
];
