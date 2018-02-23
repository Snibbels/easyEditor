export default class Context_Menu{
    element:HTMLElement = document.createElement('div');
    closing_pane:HTMLElement = document.createElement("div");

    constructor(event: MouseEvent, content: HTMLElement){
        event.preventDefault();
        this.element.appendChild(content);

        let y = event.clientY;
        let x = event.clientX;

        this.element.style.position = "fixed";
        this.element.style.top = y + "px";
        this.element.style.left = x + "px";
        this.element.style.zIndex = "100";
        this.element.style.padding = '0.5rem';
        this.element.style.border = '1px solid lightgray';
        this.element.style.borderRadius = '0px 4px 4px 4px';
        this.element.style.backgroundColor = "white";

        this.element.onclick = this.close.bind(this);

        document.body.appendChild(this.element);
        this.create_closing_pane();
    }

    close(){
        this.closing_pane.parentElement.removeChild(this.closing_pane);
        if(!!this.element.parentElement){
            this.element.parentElement.removeChild(this.element);
        }
    }

    private create_closing_pane(){
        this.closing_pane.style.position = "fixed";
        this.closing_pane.style.top = "0";
        this.closing_pane.style.left = "0";
        this.closing_pane.style.bottom = "0";
        this.closing_pane.style.right = "0";
        this.closing_pane.style.zIndex = "10";
        this.closing_pane.style.opacity = "0.5";

        this.closing_pane.onclick = (e)=>{
           this.close();
        }

        document.body.appendChild(this.closing_pane);
    }
}