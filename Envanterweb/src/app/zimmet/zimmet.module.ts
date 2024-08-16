import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ZimmetComponent } from './zimmet.component';
import { zimmetRoutingModule } from './zimmet-routing.module';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
    declarations: [ZimmetComponent],
    imports: [
        zimmetRoutingModule,
        ButtonModule,
        TableModule,
        FormsModule,
        IconFieldModule,
        ToolbarModule,
        FileUploadModule,
        InputTextModule,
        InputIconModule,
        DialogModule, 
        CheckboxModule],

    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy }
    ]
})
export class zimmetModule { }