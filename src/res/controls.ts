import icons from './icons'
import Color_Picker from '../color_picker';
import Image_Inserter from '../image_inserter';
import * as Utils from './Utils';
import i18n from './i18n';

interface raw_control {
    type?:string;
    command?:string;
    icon?:string;
    values?:string[];
    interaction?:(e?:any)=>any;
    overwrite?:(value?:string)=>void
    tooltip?:string,
    style_property?:string,
    eval_string?:string,
}

let raw_controls:raw_control[] = [
    {type:"normal", icon: icons.undo, command: "undo", tooltip: i18n.tooltips.undo},
    {type:"normal", icon: icons.redo, command: "redo", tooltip: i18n.tooltips.redo},
    {type:"normal", icon: icons.remove_formatting, command: "removeFormat", tooltip: i18n.tooltips.remove_format},
    {type:"separator"},
    {type:"normal", icon: icons.indent, command: "indent", tooltip: i18n.tooltips.indent},
    {type:"normal", icon: icons.outdent, command: "outdent", tooltip: i18n.tooltips.outdent},
    {type:"normal", icon: icons.bold, command: "bold", tooltip: i18n.tooltips.bold, style_property:"font-weight", eval_string:"700"},
    {type:"normal", icon: icons.italic, command: "italic", tooltip: i18n.tooltips.italic, style_property: "font-style", eval_string: "italic"},
    {type:"normal", icon: icons.underline, command: "underline", tooltip: i18n.tooltips.underline, style_property:"text-decoration", eval_string:"underline"},
    {type:"normal", icon: icons.strike_through, command: "strikeThrough", tooltip: i18n.tooltips.strikethrough, style_property:"text-decoration", eval_string:"line-through"},
    {type:"separator"},
    {type:"normal", icon: icons.justify_left, command:"justifyLeft", tooltip: i18n.tooltips.align_left, style_property: "text-align", eval_string: "(left|start)"},
    {type:"normal", icon: icons.justify_right, command:"justifyRight", tooltip: i18n.tooltips.align_right, style_property: "text-align", eval_string: "right"},
    {type:"normal", icon: icons.justify_center, command:"justifyCenter", tooltip: i18n.tooltips.align_center, style_property: "text-align", eval_string: "center"},
    {type:"normal", icon: icons.justify_full, command:"justifyFull", tooltip: i18n.tooltips.justify, style_property: "text-align", eval_string: "justify"},
    {type:"separator"},
    {type:"normal", icon: icons.ordered_list, command:"insertOrderedList", tooltip: i18n.tooltips.insert_ordered_list},
    {type:"normal", icon: icons.unordered_list, command:"insertUnorderedList", tooltip: i18n.tooltips.insert_unordered_list},
    {type:"separator"},
    {type:"interactive", icon: icons.forecolor, command:"foreColor", interaction:(e:any)=>Color_Picker.show(e), tooltip: i18n.tooltips.forecolor},
    {type:"interactive", icon: icons.backcolor, command:"backColor", interaction:(e:any)=>Color_Picker.show(e), overwrite: value=> Utils.set_format('backgroundColor', value), tooltip: i18n.tooltips.backcolor},
    {type:"interactive", icon: icons.image, command:"insertImage", interaction:(e:any)=>Image_Inserter.get_file().then(Image_Inserter.get_uri), tooltip: i18n.tooltips.image},
    {type:"interactive", icon: icons.link, command:"createLink", interaction:(e:any)=>prompt("insert link"), tooltip: i18n.tooltips.link},
    {type:"normal", icon: icons.unlink, command:"unlink", tooltip: i18n.tooltips.unlink},
    {type:"separator"},
    {type:"select", command:"formatBlock", values:["h1", "h2","h3","h4","h5","h6","p","dl"], tooltip: i18n.tooltips.formatblock},
    {type:"select", command:"fontSize", values:['1rem','2rem','3rem','4rem','5rem','6rem','7rem','8rem','9rem',"8px", "12px", "16px", "20px", "24px", "36px", "54px", "72px"], overwrite: value=> Utils.set_format('fontSize', value), tooltip: i18n.tooltips.fontsize, style_property:"font-size"},
    {type:"select", command:"fontName", values:["Arial", "Helvetica", "Garamond"], tooltip: i18n.tooltips.font, style_property:"font-family"},
    {command:"enableObjectResizing"},
    //{command:"styleWithCSS"},
];

export default raw_controls;