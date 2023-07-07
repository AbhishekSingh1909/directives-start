import { Directive, Input, TemplateRef , ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnlessDirective]'
})

// first custom structural directive
export class UnlessDirectiveDirective {
  @Input () set appUnlessDirective (flag : boolean) {
    debugger;
    if(!flag)
    {
      this.viewRef.createEmbeddedView(this.tempalateRef);
    }
    else {
      this.viewRef.clear();
    }

  }

  constructor(private tempalateRef : TemplateRef<any>, private viewRef :ViewContainerRef ) { 
    debugger;
  }

}
