import {Directive} from "@angular/core";

declare const CKEDITOR: any;

@Directive({
  selector: '[appAjkPlaceHolder]'
})
export class AjkPlaceHolderDirective {

  constructor() {

    CKEDITOR.dialog.add('ajkPlaceHolder', function (editor) {
      var lang = editor.lang.ajkPlaceHolder,
        generalLabel = editor.lang.common.generalTab,
        validNameRegex = /^[^\[\]<>]+$/;

      return {
        title: 'Insert Variables',
        minWidth: 300,
        minHeight: 80,
        contents: [
          {
            id: 'info',
            label: generalLabel,
            title: generalLabel,
            elements: [
              // Dialog window UI elements.
              {
                id: 'name',
                type: 'text',
                style: 'width: 100%;',
                label: 'Variables',
                'default': '',
                required: true,
                validate: CKEDITOR.dialog.validate.regex(validNameRegex, 'invalid'),
                setup: function (widget) {
                  this.setValue(widget.data.name);
                },
                commit: function (widget) {
                  widget.setData('name', this.getValue());
                }
              }
            ]
          }
        ]
      };
    });

    CKEDITOR.plugins.add('ajkPlaceHolder', {
      requires: 'widget,dialog,richcombo',
      label: 'Ajk Variables',
      icons: 'ajkPlaceHolder',
      hidpi: true,

      // onLoad: function () {
      //   Register styles for placeholder widget frame.
      //   CKEDITOR.addCss('.cke_placeholder{background-color:#ff0}');
      // },

      init: function (editor) {

        // var lang = editor.lang.ajkPlaceHolder;
        //
        // // Register dialog.
        // CKEDITOR.dialog.add('ajkPlaceHolder', this.path + 'dialogs/ajkPlaceHolder.js');

        editor.addCommand('ajkPlaceHolder', new CKEDITOR.dialogCommand('ajkPlaceHolder'));


        //
        // // Put ur init code here.
        editor.widgets.add('ajkPlaceHolder', {
          // Widget code.
          dialog: 'ajkPlaceHolder',
          // pathName: lang.pathName,
          // We need to have wrapping element, otherwise there are issues in
          // add dialog.
          template: '<span class="ajk_placeholder label label-warning">[[]]</span>',
          init: function () {
            console.log('this.element.getText(): ', this.element.getText());
            this.setData('name', this.element.getText().slice(2, -2));
          },

          data: function () {
            this.element.setText(this.data.name);
          },

          getLabel: function () {
            return this.editor.lang.widget.label.replace(/%1/, this.data.name + ' ' + this.pathName);
          }
        });

        editor.ui.addButton && editor.ui.addButton('ajkPlaceHolder', {
          label: 'AJK PlaceHolder',
          command: 'ajkPlaceHolder',
          toolbar: 'basicstyles,2',
          // toolbar: 'insert,5',
          icon: 'placeholder'
        });


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


        // editor.ui.addRichCombo('ajkPlaceHolder',
        //   {
        //     label: 'AJK variables',
        //     title: 'AJK variables',
        //     voiceLabel: 'AJK variables',
        //     className: 'cke_format',
        //     multiSelect: false,
        //     panel:
        //       {
        //         css: [].concat(editor.config.contentsCss).concat(CKEDITOR.skin.getPath('editor')),
        //         voiceLabel: editor.lang.panelVoiceLabel
        //       },
        //
        //     init: function () {
        //       this.startGroup("Insert variables");
        //       for (const i in placeHolders) {
        //         this.add(placeHolders[i][0], placeHolders[i][1], placeHolders[i][2]);
        //       }
        //
        //
        //     },
        //
        //     onClick: function (value) {
        //       console.log('value: ', value);
        //       const v = value;
        //       const template = "<span class='tag label label-warning'><span>" + v + "</span><a><i class='remove glyphicon glyphicon-remove-sign glyphicon-white'></i></a></span>";
        //
        //       console.log('template: ', template);
        //       editor.focus();
        //       editor.fire('saveSnapshot');
        //       editor.insertHtml(template);
        //       editor.fire('saveSnapshot');
        //     }
        //   });
      },

      afterInit: function (editor) {
        var placeholderReplaceRegex = /\[\[([^\[\]])+\]\]/g;

        editor.dataProcessor.dataFilter.addRules({
          text: function (text, node) {
            var dtd = node.parent && CKEDITOR.dtd[node.parent.name];

            // Skip the case when placeholder is in elements like <title> or <textarea>
            // but upcast placeholder in custom elements (no DTD).
            if (dtd && !dtd.span)
              return;

            return text.replace(placeholderReplaceRegex, function (match) {
              // Creating widget code.
              var widgetWrapper = null,
                innerElement = new CKEDITOR.htmlParser.element('span', {
                  'class': 'cke_placeholder'
                });

              // Adds placeholder identifier as innertext.
              innerElement.add(new CKEDITOR.htmlParser.text(match));
              widgetWrapper = editor.widgets.wrapElement(innerElement, 'ajkPlaceHolder');

              // Return outerhtml of widget wrapper so it will be placed
              // as replacement.
              return widgetWrapper.getOuterHtml();
            });
          }
        });
      }
    });

  }

}
