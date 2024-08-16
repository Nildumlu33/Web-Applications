import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component
    ({
        selector: 'app-menu',
        templateUrl: './app.menu.component.html'
    })
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model =
            [
                {
                    label: 'Envanter App',
                    items: [
                        { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                        {
                            label: 'Envanter', icon: 'pi pi-fw pi-bookmark', routerLink: ['/'],
                            items:
                                [
                                    {
                                        label: 'Envanter Listesi',
                                        icon: 'pi pi-fw pi-bars',
                                        routerLink: ['/envanter/envanter-list']
                                    },

                                    {
                                        label: 'Zimmet Listesi',
                                        icon: 'pi pi-fw pi-bars',
                                        routerLink: ['/zimmet/zimmet-list']
                                    }
                                ],
                        }

                    ]
                }


            ]
    }
}

