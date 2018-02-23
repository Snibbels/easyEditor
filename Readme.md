# easyEditor

## Get library

1. clone this repo
1. `cd` into it
1. run `npm install`
1. run `wepback`
1. go to `dist`
1. there is a file `easyEditor.js`

## Usage

command|description
-|-
`easyEditor.init(element:HTMLElement, target?:HTMLElement)`|makes the content of `element` editable. Optionally, the target element for the toolbar is defined.
`easyEditor.exit()`| exits edit mode, removes toolbar
`easyEditor.get_content()`| returns content as HTML
`easyEditor.set_content(content:string)`| sets content of editor to `content`
`easyEditor.attach_toolbar()`| moves toolbar above editable element
`easyEditor.detach_toolbar()`| moves toolbar to the contextmenu

