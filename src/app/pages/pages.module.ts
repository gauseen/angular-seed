import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule, routedComponents } from './pages-routing.module';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgZorroAntdModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [{
    provide: NZ_I18N,
    useValue: zh_CN,
  }]
})
export class PagesModule { }
