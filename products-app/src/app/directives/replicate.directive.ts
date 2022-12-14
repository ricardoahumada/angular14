import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[replicate]',
})
export class ReplicateDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input()
  set replicate(n: number) {
    for (var i = 0; i < n; i++)
      this.viewContainer.createEmbeddedView(this.templateRef);
  }
}
