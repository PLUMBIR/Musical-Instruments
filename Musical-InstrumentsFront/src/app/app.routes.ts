import { Routes } from '@angular/router';
import { PianoComponent } from './body/piano/piano.component';
import { DrumsComponent } from './body/drums/drums.component';

export const routes: Routes = [
    { 
        path: 'piano',
        pathMatch: 'full',
        component: PianoComponent
    },
    { 
        path: 'drums',
        pathMatch: 'full',
        component: DrumsComponent
    },
];
