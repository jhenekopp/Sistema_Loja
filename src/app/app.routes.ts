import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { 
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: () => import('./features/tela-principal/tela-principal.module').then(module => module.TelaPrincipalModule)
    },
    {
        path: 'clientes',
        loadChildren: () => import('./features/clientes/clientes.module').then(module => module.ClientesModule)
    }

    /**
     * Nosso site |
     * www.izzymakers.com.br/home
     * www.izzymakers.com.br/clientes
     * 
     * 
     * 
    */
];

export const AppRoutes: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' });
