export function set_font_size(size:string){
    if (window.getSelection) {
        let sel = window.getSelection();

        if (sel.rangeCount) {
            let container = get_top_containing_element(sel);
            
            if(container.nodeName == "SPAN"){
                container.style.fontSize = size;
                container.innerHTML = delete_span_elements_from_html_string(container.innerHTML);
            } else {
                let span = document.createElement('span');
                span.style.fontSize = size;

                wrap_selection(span, sel);
                span.innerHTML = delete_span_elements_from_html_string(span.innerHTML);
            }
        }
    }
}

function wrap_selection(el:HTMLElement, sel?:Selection){
    let selection = !!sel? sel : window.getSelection();

    let range = sel.getRangeAt(0).cloneRange();
    range.surroundContents(el);
    sel.removeAllRanges();
    sel.addRange(range);
    sel.collapseToEnd();
}

function get_top_containing_element(s?:Selection):HTMLElement {
    let selection = !!s ? s : window.getSelection();
    var element = selection.getRangeAt(0).commonAncestorContainer;
    while (element.nodeType != 1 && element.parentElement.innerText == selection.toString()) {
        element = element.parentElement;
    }
    return <HTMLElement> element;
}

function delete_span_elements_from_html_string(text:string):string{
    return text.replace(/<[/]?span( style=\"font-size: )?[0-9]*(px;\")?>/g, '');
}