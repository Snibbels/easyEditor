import { Promise } from "ts-promise";

export default class Image_Inserter{

static get_uri(file:File):Promise<string>{
    let fr = new FileReader();
    let p = new Promise<string>(resolve => {
        fr.onload = ()=>{
            resolve(fr.result);
        }
    });
    
    fr.readAsDataURL(file)
    return p;
}

static get_file():Promise<File>{
    let fc = document.createElement('input');
    fc.setAttribute('type', 'file');
    let p = new Promise<File>(resolve => {
        fc.onchange = () => resolve(fc.files[0]);
    });

    fc.click();
    return p;
}
}