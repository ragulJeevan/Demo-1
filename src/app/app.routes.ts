import { Routes } from '@angular/router';


export const routes: Routes = [
    // CORE MODULE 
    {
        path: 'core',
        loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
    },
    // FOUNDATION MODULE 
    {
        path: 'foundation',
        loadChildren: () => import('./foundation/foundation.module').then(m => m.FoundationModule)
    },
    // CLIENTS MODULE 
    {
        path: 'client',
        loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
    }
];
