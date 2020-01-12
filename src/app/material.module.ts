import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule } from '@angular/material';
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
        MatToolbarModule,
        MatButtonModule
    ]
})
export class MaterialModule { }
