import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
    import {ZimmetComponent } from './zimmet.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'zimmet-list', component: ZimmetComponent }
    ])],
    exports: [RouterModule]
})
export class zimmetRoutingModule {
}

