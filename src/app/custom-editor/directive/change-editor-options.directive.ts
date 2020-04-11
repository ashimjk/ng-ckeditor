import {Directive} from '@angular/core';

declare const CKEDITOR: any;
declare const $: any;

@Directive({
  selector: '[appChangeEditorOptions]'
})
export class ChangeEditorOptionsDirective {

  constructor() {
    CKEDITOR.on(
      'instanceReady',
      (ev) => {
        const $script = document.createElement('script');
        const $editor_instance = CKEDITOR.instances[ev.editor.name];
        // $script.src = '//path/to/your/script';
        // $script.onload = () => {
        //   run code after load
        // };
        $editor_instance.document.getHead().$.appendChild($script);
      }
    );

    CKEDITOR.on('dialogDefinition', (event) => {
      if ('ajkPlaceHolder' === event.data.name) {
        const input = event.data.definition.getContents('info').get('name');
        const dialog = event.data.definition;
        console.log('dialog: ', dialog);
        input.type = 'select';
        input.items = [
          ['First Name', 'first_name'],
          ['Last Name', 'last_name'],
          ['Link', 'link'],
        ];
      }
    });

    CKEDITOR.on('click', (event) => {
      console.log('changeEditor event: ', event);
    });
  }

}
