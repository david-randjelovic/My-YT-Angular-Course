import { NgModule } from "@angular/core";
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';

const PrimeNG: Array<any> = [
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule
];

@NgModule({
    exports: [PrimeNG]
})
export class PrimeNGModule {}