import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {EditorComponent} from "./editor.component";
import {CKEditorModule} from "ng2-ckeditor";
import {ChangeEditorOptionsDirective} from './custom-editor/directive/change-editor-options.directive';
import {RouterModule, Routes} from "@angular/router";
import {DefaultEditorComponent} from './default-editor/default-editor.component';
import {CustomEditorComponent} from './custom-editor/custom-editor.component';
import {PlaceHolderSelectDirective} from "./custom-editor/directive/place-holder-select.directive";
import {AjkPlaceHolderDirective} from "./custom-editor/directive/ajk-placeholder.directive";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: DefaultEditorComponent
  },
  {
    path: 'editor', component: CustomEditorComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ChangeEditorOptionsDirective,
    DefaultEditorComponent,
    CustomEditorComponent,
    PlaceHolderSelectDirective,
    AjkPlaceHolderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
