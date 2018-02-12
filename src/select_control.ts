export default class Select_Control{
    element:HTMLSelectElement

    constructor(private command:string, values:string[]){
        this.element = document.createElement("select");
        this.element.onchange = this.trigger.bind(this);
        
        for(let value of values){
            let temp_element = document.createElement("option");
            temp_element.value = value;
            temp_element.innerHTML = value;
            this.element.appendChild(temp_element);
        }
    }

    trigger(){
        document.execCommand(this.command, undefined, this.element.value);
    }
}

