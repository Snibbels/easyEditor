import raw_control from './res/controls';
import Normal_Control from './normal_control';
import Interactive_Control from './interactive_control';
import Select_Control from './select_control';
import {css} from './res/style'
import i18n from './res/i18n';
import Context_Menu from './context_menu';
import Format_Observable from './format_observable';

class easyEditor{
    static controls:any = [];
    static initial_commands:any = [];
    static toolbar:HTMLElement;
    static element:HTMLElement
    private static events_to_listen_for:string[] = ['click', 'blur', 'keydown'];

    static init(element:HTMLElement, toolbar?:HTMLElement){
        if(!!this.element) {this.exit();}

        this.create_toolbar();
        element.setAttribute("contenteditable", "true");
        this.add_stylesheet();
        this.set_selection_change_listener(element);

        for(let initial_command of this.initial_commands){
            document.execCommand(initial_command);
        }

        if(!toolbar){
            element.parentElement.insertBefore(this.toolbar, element);
        } else {
            toolbar.appendChild(this.toolbar);
        }
        this.element = element;
    }

    static exit(){
        this.element.removeAttribute("contenteditable");
        this.attach_toolbar();
        this.remove_selection_change_listener();
        this.toolbar.parentElement.removeChild(this.toolbar);
        this.element = undefined;
    }

    static get_content():string{
        if(!this.element) return undefined;
        return this.element.innerHTML;
    }

    static set_content(content: string){
        if(!this.element) return;
        this.element.innerHTML = content;
    }

    static detach_toolbar(){
        this.toolbar.parentElement.removeChild(this.toolbar);
        this.element.oncontextmenu = this.show_context_toolbar.bind(this);
    }

    static attach_toolbar(){
        this.element.oncontextmenu = undefined;
        this.element.parentElement.insertBefore(this.toolbar, this.element);
    }

    private static set_selection_change_listener(element:HTMLElement){
        for(let event of this.events_to_listen_for){
            element.addEventListener(event, Format_Observable.trigger.bind(Format_Observable), true);
        }
    }

    private static remove_selection_change_listener(){
        for(let event of this.events_to_listen_for){
            this.element.removeEventListener(event, Format_Observable.trigger.bind(Format_Observable));
        }
    }

    private static show_context_toolbar(event:MouseEvent){
        let cm = new Context_Menu(event, this.toolbar);
        cm.element.style.width = this.toolbar.offsetWidth/2 + "px";
    }

    private static add_stylesheet(){
        var style:any = document.createElement('style');

        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        document.getElementsByTagName('head')[0].appendChild(style);
    }

    private static create_toolbar(){
        if(!!this.toolbar) return;

        for (let data of raw_control){
            switch (data.type) {
                case 'normal':
                    this.controls.push(new Normal_Control (data.command, data.icon, data.tooltip, data.style_property, data.eval_string));
                    break;
                case 'interactive':
                    this.controls.push(new Interactive_Control(data.command, data.interaction, data.overwrite, data.icon, data.tooltip));
                    break;
                case 'select':
                    this.controls.push(new Select_Control(data.command, data.values, data.overwrite, data.tooltip));
                    break;
                case 'separator':
                    let separator = document.createElement('span');
                    separator.style.border = "1px solid lightgray";
                    separator.style.margin = "0 4px";
                    this.controls.push({element:separator});
                    break;
                default:
                    this.initial_commands.push(data.command);
            }
        }

        this.toolbar = document.createElement("div");
        this.toolbar.id = "easyToolbar"
        this.toolbar.style.marginBottom = "1em";

        for(let control of this.controls){
            this.toolbar.appendChild(control.element);
        }
    }
}

    export let init = easyEditor.init.bind(easyEditor);
    export let exit = easyEditor.exit.bind(easyEditor);
    export let get_content = easyEditor.get_content.bind(easyEditor);
    export let set_content = easyEditor.set_content.bind(easyEditor);
    export let detach_toolbar = easyEditor.detach_toolbar.bind(easyEditor);
    export let attach_toolbar = easyEditor.attach_toolbar.bind(easyEditor);