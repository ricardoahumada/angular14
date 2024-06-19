import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TabslibService } from './tabslib.service';

@Component({
  selector: 'banana-tabs',
  templateUrl: './tabslib.component.html',
  styles: [
  ]
})
export class TabslibComponent implements OnInit {

  constructor(private _tbsSrv: TabslibService) { }

  codes: string[] = [];

  @ViewChild('dynamic', { read: ViewContainerRef })
  private viewRef: ViewContainerRef = {} as ViewContainerRef;

  ngOnInit(): void {
    this._tbsSrv.getCodes().subscribe((data: string[]) => {
      this.codes = data;
      if (this.codes && this.codes.length > 0) this.showFlexDynamicComponent(this.codes[this.codes.length - 1])
    });
  }

  showFlexDynamicComponent(code: string) {
    let dynamicModule: any;
    if (code == 'OrderComponent') {
      const path = '../modules/orders/orders.module';
      dynamicModule = import(path);
    } else dynamicModule = null;

    console.log('dynamicModule:', dynamicModule);

    this.viewRef.clear();
    // if (dynamicModule) this.viewRef.createComponent(dynamicModule[code]);
  }

}
