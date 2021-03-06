import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../@core/data/alert.service';


@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent {
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }

    closAlert() {
        this.message = null;
    }
}