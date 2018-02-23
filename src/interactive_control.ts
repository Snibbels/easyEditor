import Normal_Control from "./normal_control";

export default class Interactive_Control extends Normal_Control{
    element:HTMLElement

    constructor(command:string, private interaction:(e:Event)=>Promise<string>, private overwrite?:(value:string)=>any, icon?:string, tooltip?:string){
        super(command, icon, tooltip);
    }

    async trigger(e?:Event){
        if(!!this.overwrite){
            this.overwrite(await this.interaction(e));
        }else{
            document.execCommand(this.command, undefined, await this.interaction(e));
        }
    }
}

