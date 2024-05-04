import { NgModule } from "@angular/core";
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

const PrimeNG: Array<any> = [
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    ToastModule
];

@NgModule({
    exports: [PrimeNG]
})
export class PrimeNGModule {}