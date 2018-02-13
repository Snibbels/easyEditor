import Promise from "../node_modules/ts-promise"

export default class Color_Picker{
    static colors = ["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff",
                    "#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff",
                    "#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff",
                    "#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2",
                    "#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"];
    static element:HTMLElement;
    static promises:Promise<string>[];
    static active:boolean = false;
    static field_size = 2;



    static show(event:MouseEvent):Promise<string>{
        if(this.active) return;
    
        this.active = true;
        this.create_closing_pane();

        this.element = document.createElement('div');
        this.apply_style_to_color_picker_element(event);

        this.promises = [];
        document.body.appendChild(this.element);
        
        for(let color of this.colors){
            let temp_element = document.createElement('span');

            temp_element.classList.add('color-field');
            temp_element.style.backgroundColor = color;
            this.apply_style_to_color_field_element(temp_element);

            this.promises.push(new Promise(resolve => {
                temp_element.onmousedown = (e) => {
                    resolve(color);
                    this.active = false;
                    document.body.removeChild(this.element);
                }
            }));
            
            this.element.appendChild(temp_element);
        }

        return Promise.race(this.promises);
    }

    private static apply_style_to_color_field_element(element:HTMLElement){
        element.style.display = "inline-block";
        element.style.width = 0.9 * this.field_size + "em";
        element.style.height = 0.9 * this.field_size + "em";
        element.style.margin = 0.05 * this.field_size + "em";
        element.style.outline = "1px solid lightgray";
        element.style.borderRadius = "1px";
    }

    private static apply_style_to_color_picker_element(event:MouseEvent){
        this.element.classList.add('color-picker');
        this.element.style.width = this.field_size*1.2*Math.sqrt(this.colors.length) + "em";
        this.element.style.backgroundColor = "white";
        this.element.style.border = "1px solid lightgray";
        this.element.style.borderRadius = "4px";
        this.element.style.justifyContent = "center";

        let calling_element = <HTMLElement> event.currentTarget;
        let y = parseInt(<any>calling_element.offsetTop) + parseInt(<any>calling_element.offsetHeight);
        let x = parseInt(<any>calling_element.offsetLeft);

        this.element.style.position = "fixed";
        this.element.style.top = y + "px";
        this.element.style.left = x + "px";
        this.element.style.zIndex = "100";
        
    }

    private static create_closing_pane(){
        let closing_pane = document.createElement("div");
        closing_pane.style.position = "fixed";
        closing_pane.style.top = "0";
        closing_pane.style.left = "0";
        closing_pane.style.bottom = "0";
        closing_pane.style.right = "0";
        closing_pane.style.zIndex = "10";
        closing_pane.style.opacity = "0.5";

        closing_pane.onclick = (e)=>{
            this.active = false;
            document.body.removeChild(closing_pane);
            document.body.removeChild(this.element);
        }

        document.body.appendChild(closing_pane);
    }
}