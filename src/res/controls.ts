import icons from './icons'
import Color_Picker from '../color_picker';
import Image_Inserter from '../image_inserter';
import * as Utils from './Utils';

interface raw_control {
    type?:string;
    command?:string;
    icon?:string;
    values?:string[];
    interaction?:(e?:any)=>Promise<string>;
    overwrite?:(value?:string)=>void
}

let raw_controls:raw_control[] = [
    {type:"normal", icon: icons.undo, command: "undo"},
    {type:"normal", icon: icons.redo, command: "redo"},
    {type:"normal", icon: icons.bold, command: "bold"},
    {type:"normal", icon: icons.italic, command: "italic"},
    {type:"normal", icon: icons.underline, command: "underline"},
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
    {type:"interactive", icon: icons.backcolor, command:"backColor", interaction:(e:any)=>Color_Picker.show(e)},
    {type:"interactive", icon: icons.image, command:"insertImage", interaction:(e:any)=>Image_Inserter.get_file().then(Image_Inserter.get_uri)},
    {type:"select", command:"fontSize", values:['1rem','2rem','3rem','4rem','5rem','6rem','7rem','8rem','9rem',"8px", "12px", "16px", "20px", "24px", "36px", "54px", "72px"], overwrite:Utils.set_font_size},
    {type:"select", command:"fontName", values:["Arial", "Helvetica", "Helvetica New", "Garamond"]},
    {command:"enableObjectResizing"},
];

export default raw_controls;