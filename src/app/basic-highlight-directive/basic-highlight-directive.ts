import { Directive, ElementRef,OnInit } from "@angular/core"
@Directive({
    selector :'[app-basic-directive]' //directive selecter with []
})

//First Custom Directive by my own
export class BasicHighlightDirective implements OnInit
{
    constructor(private inputElementRef : ElementRef)
    {

    }
    ngOnInit(): void {
        // do not access dom element directly.
        this.inputElementRef.nativeElement.style.backgroundColor = 'green';
    }

}