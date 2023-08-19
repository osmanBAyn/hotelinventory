import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @Input() appHover : string = 'red';
  constructor(private element:ElementRef,private renderer: Renderer2) {
    //element.nativeElement.style.backgroundColor = this.color;
    //renderer.setStyle(element.nativeElement,'background-color',this.color);
   }
   @HostListener('mouseenter') a(){
    this.renderer.setStyle(this.element.nativeElement,'background-color',this.appHover);

   }
   @HostListener('mouseleave') b(){
    this.renderer.setStyle(this.element.nativeElement,'background-color','white');
   }
}
  