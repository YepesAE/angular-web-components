import { Routes } from '@angular/router';
import { RoutingTestComponent } from './routing-test/routing-test.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'pathToRoutingTest',
        component: RoutingTestComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
    }

];
