class Normal_Control{
    element:HTMLElement

    constructor(private command:string, icon:string){
        this.element = document.createElement("button");
        this.element.innerHTML = icon;
        this.element.onclick = this.trigger;
    }

    trigger(){
        document.execCommand(this.command);
    }
}

