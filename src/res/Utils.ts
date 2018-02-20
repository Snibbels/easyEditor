export function set_format(attribute:any, value:string){
    if (window.getSelection) {
        let sel = window.getSelection();

        if (sel.rangeCount) {
            let container = get_top_containing_element(sel);
            
            if(container.nodeName == "SPAN" && container.innerText == sel.toString()){
                container.style[attribute] = value;
                remove_style_from_children(attribute, container);
            } else {
                let span = document.createElement('span');
                span.style[attribute] = value;

                wrap_selection(span, sel);
                remove_style_from_children(attribute, span);
            }
        }
    }
}

function wrap_selection(el:HTMLElement, sel?:Selection){
    let selection = !!sel? sel : window.getSelection();

    let range = selection.getRangeAt(0).cloneRange();
    el.appendChild(range.extractContents());
    range.insertNode(el);
}

function get_top_containing_element(s?:Selection):HTMLElement {
    let selection = !!s ? s : window.getSelection();
    var element = selection.getRangeAt(0).commonAncestorContainer;
    while (element.nodeType != 1 && element.parentElement.innerText == selection.toString()) {
        element = element.parentElement;
    }
    return <HTMLElement> element;
}

function remove_style_from_children(style_attribute:any, element:HTMLElement){
    let children = (element.querySelectorAll('span'));

    let i, child;
    for(i=0, child = children[i]; i<children.length; i++){
        child.style[style_attribute] = "inherit";
        remove_style_from_children(style_attribute, child);
    }
}