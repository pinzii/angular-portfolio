import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFancy]',
  standalone: true
})
export class FancyDirective {

  @Input() appFancy: string = 'blue';

  private isFancy: boolean = false;

  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick(){
    this.isFancy = !this.isFancy;
    this.toggleFancy(this.isFancy);
  }

  private toggleFancy(enable: boolean): void{
    if (enable) {
      this.el.nativeElement.style.color = this.appFancy;
      this.el.nativeElement.style.fontWeight = 'bold';
      this.el.nativeElement.style.border = `2px dashed ${this.appFancy}`;
      this.el.nativeElement.style.padding = '5px';
    }else{
    this.el.nativeElement.style.color = '';
    this.el.nativeElement.style.fontWeight = '';
    this.el.nativeElement.style.border = '';
    this.el.nativeElement.style.padding = '';
    }
  }  
}
