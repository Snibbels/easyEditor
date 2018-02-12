import Normal_Control from "./normal_control";

export default class Interactive_Control extends Normal_Control{
    element:HTMLElement

    constructor(command:string, private interaction:()=>Promise<string>, icon?:string){
        super(command, icon);
    }

    async trigger(){
        document.execCommand(this.command, undefined, await this.interaction());
    }
}

