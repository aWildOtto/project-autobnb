import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatSelectModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
    ],
    exports: [
        MatInputModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSelectModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class MaterialModule { }
