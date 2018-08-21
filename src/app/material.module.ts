import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule,MatToolbarModule, MatInputModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule, MatSliderModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
    imports: 
    [
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatInputModule,
        MatMenuModule,
        MatCardModule,
        MatGridListModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSliderModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatAutocompleteModule
    ],
    exports:
    [
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatInputModule,
        MatMenuModule,
        MatCardModule,
        MatGridListModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSliderModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatAutocompleteModule
    ]
})

export class MaterialModule {}