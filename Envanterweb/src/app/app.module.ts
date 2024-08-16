import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { EnvanterModule } from './envanter/envanter.module';
import { CommonModule } from '@angular/common';
import { zimmetModule } from './zimmet/zimmet.module';
// import { NotfoundComponent } from './demo/components/notfound/notfound.component';
// import { ProductService } from './demo/service/product.service';
// import { CountryService } from './demo/service/country.service';
// import { CustomerService } from './demo/service/customer.service';
// import { EventService } from './demo/service/event.service';
// import { IconService } from './demo/service/icon.service';
// import { NodeService } from './demo/service/node.service';
// import { PhotoService } from './demo/service/photo.service';

@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule, AppLayoutModule, EnvanterModule, zimmetModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}