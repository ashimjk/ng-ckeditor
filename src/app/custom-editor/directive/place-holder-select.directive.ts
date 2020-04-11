import {Directive} from "@angular/core";

declare const CKEDITOR: any;

@Directive({
  selector: '[appPlaceHolderSelect]'
})
export class PlaceHolderSelectDirective {

  constructor() {

    CKEDITOR.plugins.add('placeHolderSelect',
      {
        requires: ['richcombo'],
        init: function (editor) {
          const placeHolders = [];
          const defaultConfig = {
            format: '[[%placeHolder%]]',
            placeHolders: []
          };

          const config = CKEDITOR.tools.extend(defaultConfig, editor.config.placeHolderSelect || {}, true);

          for (let i = 0; i < config.placeHolders.length; i++) {
            // get our potentially custom placeHolder format
            const placeHolder = config.format.replace('%placeHolder%', config.placeHolders[i]);
            placeHolders.push([placeHolder, config.placeHolders[i], config.placeHolders[i]]);
          }

          // add the menu to the editor
          editor.ui.addRichCombo('placeHolderSelect',
            {
              label: 'Insert variables',
              title: 'Insert variables',
              voiceLabel: 'Insert variables',
              className: 'cke_format',
              multiSelect: false,
              panel:
                {
                  css: [].concat(editor.config.contentsCss).concat(CKEDITOR.skin.getPath('editor')),
                  voiceLabel: editor.lang.panelVoiceLabel
                },

              init: function () {
                this.startGroup("Insert variables");
                for (const i in placeHolders) {
                  this.add(placeHolders[i][0], placeHolders[i][1], placeHolders[i][2]);
                }


              },

              onClick: function (value) {
                console.log('value: ', value);
                const v = value;
                const template = "<span class='tag label label-warning'><span>" + v + "</span><a><i class='remove glyphicon glyphicon-remove-sign glyphicon-white'></i></a></span>";

                console.log('template: ', template);
                editor.focus();
                editor.fire('saveSnapshot');
                editor.insertHtml(template);
                editor.fire('saveSnapshot');
              }
            });
        }
      });
  }

}
