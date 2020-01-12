import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
    ],
    exports: [
        MatInputModule,
        BrowserAnimationsModule,
        MatToolbarModule
    ]
})
export class MaterialModule { }
