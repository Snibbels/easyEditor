import raw_control from './res/controls';
import Normal_Control from './normal_control';
import Interactive_Control from './interactive_control';
import Select_Control from './select_control';

class easyEditor{
    static controls:any = [];
    static initial_commands:any = [];
    static toolbar:HTMLElement;
    static element:HTMLElement

    static init(element:HTMLElement, toolbar?:HTMLElement){
        if(!!this.element) {this.exit();}
        this.create_toolbar();
        element.setAttribute("contenteditable", "true");
        
        if(!toolbar){
            element.parentElement.insertBefore(this.toolbar, element);
        } else {
            toolbar.appendChild(this.toolbar);
        }
        this.element = element;
    }

    static exit(){
        this.element.removeAttribute("contenteditable");
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

    private static add_stylesheet(){
    }

    private static create_toolbar(){
        if(!!this.toolbar) return;

        for (let data of raw_control){
            switch (data.type) {
                case 'normal':
                    this.controls.push(new Normal_Control (data.command, data.icon));
                    break;
                case 'interactive':
                    this.controls.push(new Interactive_Control(data.command, data.interaction, data.icon));
                    break;
                case 'select':
                    this.controls.push(new Select_Control(data.command, data.values));
                    break;
                default:
                    this.initial_commands.push(data.command);
            }
        }

        this.toolbar = document.createElement("div");
        this.toolbar.id = "easyToolbar"

        for(let control of this.controls){
            this.toolbar.appendChild(control.element);
        }
    }
}

    export let init = easyEditor.init.bind(easyEditor);
    export let exit = easyEditor.exit.bind(easyEditor);
    export let get_content = easyEditor.get_content.bind(easyEditor);
    export let set_content = easyEditor.set_content.bind(easyEditor);