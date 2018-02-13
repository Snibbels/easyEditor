export default class Normal_Control{
    element:HTMLElement
    command:string;

    constructor(command:string, icon:string){
        this.command = command;
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewPort", "0 0 24 24");
        svg.setAttribute("viewBox", "-2 -2 26 26");
        svg.style.height = "24px";
        svg.style.width = "24px"
        
        let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", icon);
        
        this.element = document.createElement("button");
        this.element.onmousedown = this.trigger.bind(this);
        
        svg.appendChild(path);
        this.element.appendChild(svg);
    }

    trigger(){
        document.execCommand(this.command);
    }
}

