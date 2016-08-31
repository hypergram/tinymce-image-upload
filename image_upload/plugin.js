/**
 * plugin.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*global tinymce:true */

tinymce.PluginManager.add('image_upload',  function (editor) {
    function showDialog() {
        $('#html-editor-image-insert').val('');
        $('#element-html-editor-insert .preview-wrapper').empty();
        $('#element-html-editor-insert .progress-bar').width(0);
        $('#tinymce-image-upload').modal('show');
        // Gecko has a major performance issue with textarea
        // contents so we need to set it when all reflows are done
        //win.find('#code').value(editor.getContent({ source_view: true }));
        selectedTinyMce = editor;
    }

    editor.addButton('image_upload', {
        icon: 'image',
        tooltip: 'Image Upload',
        onclick: showDialog
    });

    editor.addMenuItem('image_upload', {
        icon: 'image',
        text: 'Image Upload',
        context: 'insert',
        onclick: showDialog
    });
});
