import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EnvanterComponent } from './envanter.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'envanter-list', component: EnvanterComponent }
    ])],
    exports: [RouterModule]
})
export class EnvanterRoutingModule {
}
