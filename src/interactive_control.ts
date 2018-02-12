class Interactive_Control{
    element:HTMLElement

    constructor(private command:string, private interaction:(callback:(value)=>any)=>any, icon?:string){
        this.element = document.createElement("button");
        this.element.innerHTML = icon;
        this.element.onmousedown = this.trigger.bind(this);
    }

    trigger(){
        this.interaction((value) => {
            document.execCommand(this.command, undefined, value);
        });
    }
}

