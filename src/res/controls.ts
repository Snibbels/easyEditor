import icons from './icons'
import Color_Picker from '../color_picker';
import Image_Inserter from '../image_inserter';
import * as Utils from './Utils';

interface raw_control {
    type?:string;
    command?:string;
    icon?:string;
    values?:string[];
    interaction?:(e?:any)=>any;
    overwrite?:(value?:string)=>void
}

let raw_controls:raw_control[] = [
    {type:"normal", icon: icons.undo, command: "undo"},
    {type:"normal", icon: icons.redo, command: "redo"},
    {type:"normal", icon: icons.remove_formatting, command: "removeFormat"},
    {type:"separator"},
    {type:"normal", icon: icons.indent, command: "indent"},
    {type:"normal", icon: icons.outdent, command: "outdent"},
    {type:"normal", icon: icons.bold, command: "bold"},
    {type:"normal", icon: icons.italic, command: "italic"},
    {type:"normal", icon: icons.underline, command: "underline"},
    {type:"normal", icon: icons.strike_through, command: "strikeThrough"},
    {type:"separator"},
    {type:"normal", icon: icons.justify_left, command:"justifyLeft"},
    {type:"normal", icon: icons.justify_right, command:"justifyRight"},
    {type:"normal", icon: icons.justify_center, command:"justifyCenter"},
    {type:"normal", icon: icons.justify_full, command:"justifyFull"},
    {type:"separator"},
    {type:"normal", icon: icons.ordered_list, command:"insertOrderedList"},
    {type:"normal", icon: icons.unordered_list, command:"insertUnorderedList"},
    {type:"separator"},
    {type:"interactive", icon: icons.forecolor, command:"foreColor", interaction:(e:any)=>Color_Picker.show(e)},
    {type:"interactive", icon: icons.backcolor, command:"backColor", interaction:(e:any)=>Color_Picker.show(e), overwrite: value=> Utils.set_format('backgroundColor', value)},
    {type:"interactive", icon: icons.image, command:"insertImage", interaction:(e:any)=>Image_Inserter.get_file().then(Image_Inserter.get_uri)},
    {type:"interactive", icon: icons.link, command:"createLink", interaction:(e:any)=>prompt("insert link")},
    {type:"normal", icon: icons.unlink, command:"unlink"},
    {type:"separator"},
    {type:"select", command:"formatBlock", values:["h1", "h2","h3","h4","h5","h6","p","dl"]},
    {type:"select", command:"fontSize", values:['1rem','2rem','3rem','4rem','5rem','6rem','7rem','8rem','9rem',"8px", "12px", "16px", "20px", "24px", "36px", "54px", "72px"], overwrite: value=> Utils.set_format('fontSize', value)},
    {type:"select", command:"fontName", values:["Arial", "Helvetica", "Garamond"]},
    {command:"enableObjectResizing"},
    //{command:"styleWithCSS"},
];

export default raw_controls;