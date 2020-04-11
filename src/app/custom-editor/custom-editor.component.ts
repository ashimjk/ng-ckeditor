import {Component} from '@angular/core';

// declare const CKEDITOR: any;

@Component({
  selector: 'app-custom-editor',
  template: `
    <div appChangeEditorOptions
         appAjkPlaceHolder>
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
  styleUrls: ['./custom-editor.component.css']
})
export class CustomEditorComponent {

  content: string = '<p>content<br><br><br><br><br><br><br><br></p>';

  config: any = {
    allowedContent: true,
    toolbar: [['Bold', 'Italic', 'Underline', '-', 'NumberedList', 'BulletedList', 'Link', '-',
      'ajkPlaceHolder']],
    // removePlugins: 'elementspath',
    // resize_enabled: false,
    extraPlugins: 'font,divarea,richcombo,stylesheetparser,ajkPlaceHolder',
    contentsCss: ["body {font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;background-color: red;}"],
    autoParagraph: false,
    format_h1: {element: 'div', attributes: {'class': 'editorTitle1'}},
    enterMode: 2,
    language: 'en',
    lang: {
      pathName: './'
    },
    placeHolderSelect: {
      placeHolders: ["ram", "shyam", "hari"],
      format: '%placeHolder%'
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
    // console.log('editor.editable(): ', editor.editable());

    // editor.editing.view.on('click', (evt, data ) => {
    //   console.log('evt: ', evt);
    //   console.log('data: ', data);
    // })

    editor.editable().on('click', function (event) {
      var target = event.data.getTarget();

      if (target.is('span')) {
        // editor.openDialog('ajkPlaceHolder');
        console.log('clicked span!');
        // editor.editable().findOne( 'span' ).remove();
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
