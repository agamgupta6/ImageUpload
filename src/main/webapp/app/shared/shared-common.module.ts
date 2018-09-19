import { NgModule } from '@angular/core';

import { ImageUploadSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ImageUploadSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ImageUploadSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ImageUploadSharedCommonModule {}
