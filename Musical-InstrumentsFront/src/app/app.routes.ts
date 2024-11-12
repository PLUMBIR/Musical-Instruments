import { Routes } from '@angular/router';
import { PianoComponent } from './body/piano/piano.component';
import { DrumsComponent } from './body/drums/drums.component';
import { BuypageContentComponent } from './body/buypage-content/buypage-content.component';

export const routes: Routes = [
    { 
        path: '',
        pathMatch: 'full',
        component: BuypageContentComponent
    },
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
