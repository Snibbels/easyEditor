import Format_Observer from "./format_observer";
import Format_Observable from "./format_observable";

export default class Select_Control implements Format_Observer{
    element:HTMLSelectElement

    constructor(private command:string, values:string[], private overwrite:(value:string)=>void, tooltip:string,private style_property:string){
        this.element = document.createElement("select");
        let placeholder = document.createElement("option");
        this.element.onclick = e => {
            placeholder.value = placeholder.innerHTML = this.element.value + " ";
            this.element.value = placeholder.value;
        }
        this.element.onchange = this.trigger.bind(this);
        placeholder.setAttribute('disabled', 'true');
        placeholder.setAttribute('selected', 'true');
        this.element.appendChild(placeholder);
        if(!!tooltip) {this.element.title = tooltip;}

        for(let value of values){
            if(!placeholder.value){
                placeholder.value = placeholder.innerHTML = value + " ";
            }

            let temp_element = document.createElement("option");
            temp_element.value = value;
            temp_element.innerHTML = value;
            this.element.appendChild(temp_element);
        }
        if(!!this.style_property){
            Format_Observable.add_listener(this);
        }
    }

    trigger(){
        if(!!this.overwrite){
            this.overwrite(this.element.value);
            return;
        }

        document.execCommand(this.command, undefined, this.element.value);
    }

    handle_selection_change(style:CSSStyleDeclaration){
        let prop = style.getPropertyValue(this.style_property);
        console.log(prop);
        this.element.value = prop;
    }
}

