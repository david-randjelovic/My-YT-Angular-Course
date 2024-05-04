import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: '[appNumbersOnly]'
})
export class NumericDirective {
    @HostListener('keydown', ['$event'])
    keyDown(event: KeyboardEvent) {
        if((event.key >= '0' && event.key <= '9') || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'Backspace' || event.key === 'Delete' || (event.ctrlKey && event.key === 'a')) {
            return;
        } else {
            event.preventDefault();
        }
    }
}