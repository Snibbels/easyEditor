class Color_Picker{
    static colors = ["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff",
              "#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff",
              "#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff",
              "#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2",
              "#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"];
    static callback;
    static element;

    static show(callback:(result:any)=>any){
        this.callback = callback;
        this.generate_ui();
        return this.element;
    }

    static generate_ui(){
        if(!!this.element) return;

        this.element = document.createElement('div');
        this.element.classList.add('color-picker');
        this.element.style.width = 1.4*Math.sqrt(this.colors.length) + "em";

        for(let color of this.colors){
            let temp_element = document.createElement('span');
            temp_element.classList.add('color-field');

            /*style*/            
            temp_element.style.backgroundColor = color;
            temp_element.style.display = "inline-block";
            temp_element.style.width = "0.875em";
            temp_element.style.height = "0.875em";
            temp_element.style.margin = "0.125em";
            /*end style */

            temp_element.onmousedown = (e) => {
                this.callback(color);
            }
            this.element.appendChild(temp_element);
        }
    }
}