import icons from './icons'
import Color_Picker from '../color_picker';

interface raw_control {
    type:string;
    command:string;
    icon?:string;
    values?:string[];
    interaction?:()=>Promise<string>;
}

let raw_controls:raw_control[] = [
    {type:"normal", icon: icons.undo, command: "undo"},
    {type:"normal", icon: icons.redo, command: "redo"},
    {type:"normal", icon: icons.bold, command: "bold"},
    {type:"normal", icon: icons.italic, command: "italic"},
    {type:"normal", icon: icons.underline, command: "underline"},
    {type:"normal", icon: icons.justify_left, command:"justifyLeft"},
    {type:"normal", icon: icons.justify_right, command:"justifyRight"},
    {type:"normal", icon: icons.justify_center, command:"justifyCenter"},
    {type:"normal", icon: icons.justify_full, command:"justifyFull"},
    {type:"normal", icon: icons.ordered_list, command:"insertOrderedList"},
    {type:"normal", icon: icons.unordered_list, command:"insertUnorderedList"},
    {type:"interactive", icon: icons.fontcolor, command:"foreColor", interaction:()=>Color_Picker.show()}
];

export default raw_controls;