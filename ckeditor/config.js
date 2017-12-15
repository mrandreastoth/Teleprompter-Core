/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	
	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.
	config.plugins = 'dialogui,dialog,a11yhelp,about,allowsave,basicstyles,bidi,blockquote,notification,button,toolbar,clipboard,panelbutton,panel,floatpanel,colorbutton,colordialog,menu,contextmenu,dialogadvtab,div,elementspath,enterkey,entities,eqneditor,fastimage,popup,filebrowser,find,listblock,richcombo,font,format,fakeobjects,forms,horizontalrule,htmlwriter,iframe,image,lineutils,widgetselection,widget,image2,indent,indentblock,indentlist,justify,menubutton,language,lineheight,link,list,liststyle,magicline,pagebreak,pastebase64,pastefromword,pastetext,preview,print,table,quicktable,removeformat,save,selectall,sharedspace,showblocks,showborders,smiley,sourcearea,sourcedialog,staticspace,stylescombo,symbol,tab,tabletools,tableresize,templates,texttransform,undo,wordcount,wysiwygarea';
	config.skin = 'bootstrapck';
	// %REMOVE_END%

	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
};
