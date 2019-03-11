import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSortableDirective]'
})
export class SortableDirectiveDirective {

  constructor(private el: ElementRef) { }

}
