import {Component} from "@angular/core";

@Component({
  selector: 'app-editor',
  template: `
    <div appChangeEditorOptions>
      <ckeditor
        [(ngModel)]="content"
        [config]="config"
        [readonly]="false"
        (change)="onChange($event)"
        (editorChange)="onEditorChange($event)"
        (ready)="onReady($event)"
        (focus)="onFocus($event)"
        (blur)="onBlur($event)"
        (contentDom)="onContentDom($event)"
        (fileUploadRequest)="onFileUploadRequest($event)"
        (fileUploadResponse)="onFileUploadResponse($event)"
        (paste)="onPaste($event)"
        (drop)="onDrop($event)"
        debounce="500">
      </ckeditor>
    </div>
  `,
})
export class EditorComponent {

  content: string = '<p>Some html</p>';
  config: any = {
    allowedContent: true,
    toolbar: [['Bold', 'Italic', 'Underline', '-', 'NumberedList', 'BulletedList', 'Link', '-', 'CreatePlaceholder', 'placeholder_select']],
    removePlugins: 'elementspath',
    resize_enabled: false,
    extraPlugins: 'font,divarea,richcombo,placeholder,placeholder_select',
    contentsCss: ["body {font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;}"],
    autoParagraph: false,
    enterMode: 2,
    language: 'en',
    placeholder_select: {
      placeholders: ["ashim", "khadka"],
      format: '{{%placeholder%}}'
    }
  };


  onChange($event: any) {
    console.log('Method: onChange()');
  }

  onEditorChange(editor: any) {
    console.log('Method: onEditorChange()');
  }

  onReady($event: any) {
    console.log('Method: onReady()');

    let editor = $event.editor;
    console.log('editor.editable(): ', editor.editable());

    // editor.editing.view.on('click', (evt, data ) => {
    //   console.log('evt: ', evt);
    //   console.log('data: ', data);
    // })

    editor.editable().on('click', function (event) {
      var target = event.data.getTarget();

      if (target.is('span')) {
        console.log('clicked span!');
      }
    });
  }

  onFocus($event: any) {
    console.log('Method: onFocus()');
  }

  onBlur($event: any) {
    console.log('Method: onBlur()');
  }

  onContentDom($event: any) {
    console.log('Method: onContentDom()');
  }

  onFileUploadRequest($event: any) {
    console.log('Method: onFileUploadRequest()');
  }

  onFileUploadResponse($event: any) {
    console.log('Method: onFileUploadResponse()');
  }

  onPaste($event: ClipboardEvent) {
    console.log('Method: onPaste()');
  }

  onDrop($event: DragEvent) {
    console.log('Method: onDrop()');
  }
}
