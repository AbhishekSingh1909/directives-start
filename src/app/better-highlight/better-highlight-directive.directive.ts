import { Directive, ElementRef, HostListener, OnInit, Renderer2,HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlightDirective]'
})
//custom directive with rendera
export class BetterHighlightDirectiveDirective implements OnInit {
  @Input ('appBetterHighlightDirective') highlightColor : string = 'blue';
  @Input () defaultColor : string = 'transparent';
  //Host binding better way to use DOM properties 
  @HostBinding ('style.backgroundColor') backGroundColor : string = 'transparent';
  @HostBinding ('style.color') textColor : string = 'black';

  constructor(private elementRef : ElementRef, private rendera : Renderer2) { }
  ngOnInit(): void {
    // this.rendera.setStyle(this.elementRef.nativeElement,'background-color',  'blue');
    // this.rendera.setStyle(this.elementRef.nativeElement,'color',  'white');
  }
  // HostListener to use rendera better
  @HostListener('mouseenter') mouseover() {
    // this.rendera.setStyle(this.elementRef.nativeElement,'background-color',  'blue');
    // this.rendera.setStyle(this.elementRef.nativeElement,'color',  'white');
    this.backGroundColor = this.highlightColor;
    this.textColor ='white';
  }

  @HostListener('mouseleave') mouseleave() {
    // this.rendera.setStyle(this.elementRef.nativeElement,'background-color',  'transparent');
    // this.rendera.setStyle(this.elementRef.nativeElement,'color',  'black');
    this.backGroundColor = this.defaultColor;
    this.textColor ='black';
  }

}
