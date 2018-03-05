import Format_Observer from "./format_observer";

export default class Format_Observable{
  static listener:Format_Observer[] = [];

  static add_listener(listener:Format_Observer){
    if(this.listener.indexOf(listener) == -1){
      this.listener.push(listener);
    }
  }

  static remove_listener(listener:Format_Observer){
    if(this.listener.indexOf(listener) > -1){
      let i = this.listener.indexOf(listener);
      this.listener.splice(i, 1);
    }
  }

  static trigger(event:Event){
    let style = getComputedStyle(getSelection().anchorNode.parentElement);
    if(!!style){
      this.listener.forEach(listener => listener.handle_selection_change(style));
    }
  }
}