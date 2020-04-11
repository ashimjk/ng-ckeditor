import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {EditorComponent} from "./editor.component";
import {CKEditorModule} from "ng2-ckeditor";
import {ChangeEditorOptionsDirective} from './change-editor-options.directive';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ChangeEditorOptionsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
