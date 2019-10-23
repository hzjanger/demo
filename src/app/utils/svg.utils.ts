import {MatIconRegistry} from '@angular/material';
import {DomSanitizer, ɵBrowserDomAdapter} from '@angular/platform-browser';

export const loadSvgResource = (matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) => {

  const baseUrl: string = 'assets/img/svg';

  //关闭图标
  matIconRegistry.addSvgIcon('close', domSanitizer.bypassSecurityTrustResourceUrl(`${baseUrl}/close-24px.svg`));
  //更多图标,水平方向
  matIconRegistry.addSvgIcon('more_vert', domSanitizer.bypassSecurityTrustResourceUrl(`${baseUrl}/more_vert-24px.svg`));
  //搜索图标
  matIconRegistry.addSvgIcon('search', domSanitizer.bypassSecurityTrustResourceUrl(`${baseUrl}/search-24px.svg`));
  //更多图标,垂直方向
  matIconRegistry.addSvgIcon('more_horiz', domSanitizer.bypassSecurityTrustResourceUrl(`${baseUrl}/more_horiz-24px.svg`));
};
