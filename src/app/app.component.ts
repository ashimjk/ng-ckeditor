import {Component} from '@angular/core';

// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // @ViewChild('editor') editorComponent: CKEditorComponent;
  //
  public config = {toolbar: ['heading', '|', 'bold', 'italic'], placeholder: 'Type the content here'}
  // public Editor = ClassicEditor;
  public isDisabled = false;
  // public componentEvents: string[] = [];
  //
  // public editorData;
  //
  public editorData = `<p>testing</p>`;

  //
  public getCkEditor() {
    //   Warning: This may return "undefined" if the editor is hidden behind the `*ngIf` directive or
    //   if the editor is not fully initialised yet.
    // let editor = this.editorComponent.editorInstance;
    // console.log('editor: ', editor);
    // return editor;
  }

  public toggleDisableEditors() {
    //   this.isDisabled = !this.isDisabled;
    //
    //   this.getCkEditor();
    // ui.addRichCombo('my-combo', {
    //     label: 'My Dropdown Label',
    //     title: 'My Dropdown Title',
    //     toolbar: 'basicstyles,0',
    //
    //     panel: {
    //       multiSelect: false,
    //       attributes: {
    //         'aria-label': 'My Dropdown Title'
    //       }
    //     },
    //     init: function () {
    //       this.startGroup('My Dropdown Group #1');
    //       this.add("<span>ashim</span>", 'Foo!');
    //       this.add('bar', 'Bar!');
    //
    //       this.startGroup('My Dropdown Group #2');
    //       this.add('ping', 'Ping!');
    //       this.add('pong', 'Pong!');
    //     },
    //     onClick: function (value) {
    //       editor.focus();
    //       editor.fire('saveSnapshot');
    //       console.log('onClick');
    //       editor.insertHtml(value, 'unfiltered_html');
    //       editor.fire('saveSnapshot');
    //     }
    //   });
  }

  // public onReady(editor: Editor) {
  //   this.componentEvents.push('The editor is ready.');
  //
  //   editor.ui.addRichCombo('my-combo', {
  //     label: 'My Dropdown Label',
  //     title: 'My Dropdown Title',
  //     toolbar: 'basicstyles,0',
  //
  //     panel: {
  //       multiSelect: false,
  //       attributes: {
  //         'aria-label': 'My Dropdown Title'
  //       }
  //     },
  //     init: function () {
  //       this.startGroup('My Dropdown Group #1');
  //       this.add("<span>ashim</span>", 'Foo!');
  //       this.add('bar', 'Bar!');
  //
  //       this.startGroup('My Dropdown Group #2');
  //       this.add('ping', 'Ping!');
  //       this.add('pong', 'Pong!');
  //     },
  //     onClick: function (value) {
  //       editor.focus();
  //       editor.fire('saveSnapshot');
  //       console.log('onClick');
  //       editor.insertHtml(value, 'unfiltered_html');
  //       editor.fire('saveSnapshot');
  //     }
  //   });
  //
  //
  //   editor.ui.getEditableElement()
  //     .parentElement
  //     .insertBefore(
  //       editor.ui.view.toolbar.element,
  //       editor.ui.getEditableElement()
  //     );
  // }
  //
  // public onChange() {
  //   this.componentEvents.push('Editor model changed.');
  // }
  //
  // public onFocus() {
  //   this.componentEvents.push('Focused the editing view.');
  // }
  //
  // public onBlur() {
  //   this.componentEvents.push('Blurred the editing view.');
  // }
  //
  // public onError() {
  //   this.componentEvents.push('The editor crashed.');
  // }
}
