interface i18n_unit {
  prompt: {
    cancel: string,
    confirm: string,
  };
  create_link_prompt_message:string;
  tooltips:{
    undo:string,
    redo:string,
    remove_format:string,
    indent:string,
    outdent:string,
    bold:string,
    italic:string,
    underline:string,
    strikethrough:string,
    align_center:string,
    align_left:string,
    align_right:string,
    justify:string,
    insert_ordered_list:string,
    insert_unordered_list:string,
    backcolor:string,
    forecolor:string,
    image:string,
    link:string,
    unlink:string,
    formatblock:string,
    fontsize:string,
    font:string
  }
}

let i18n: any = {
  de: {
    prompt: {
      cancel: 'Abbrechen',
      confirm: 'OK'
    },
    create_link_prompt_message: 'Link einfügen',
    tooltips:{
      undo:'rückgängig',
      redo:'wiederholen',
      remove_format:'Formatierung entfernen',
      indent:'Einzug erhöhen',
      outdent:'Einzug verringern',
      bold:'Fett',
      italic:'Kursiv',
      underline:'unterstreichen',
      strikethrough:'durchstreichen',
      align_center:'zentrieren',
      align_left:'linksbündig',
      align_right:'rechtsbündig',
      justify:'blocksatz',
      insert_ordered_list:'Nummerierung',
      insert_unordered_list:'Liste',
      backcolor:'Hintergrundfarbe ändern',
      forecolor:'Schriftfarbe ändern',
      image:'Bild einfügen',
      link:'URL einfügen',
      unlink:'URL entfernen',
      formatblock:'Blockformatierung',
      fontsize:'Schriftgröße',
      font:'Schriftart'
    }
  },
  en: {
    prompt:{
      cancel: 'cancel',
      confirm: 'OK'
    },
    create_link_prompt_message: 'insert link',
    tooltips:{
      undo:undefined,
      redo:undefined,
      remove_format:undefined,
      indent:undefined,
      outdent:undefined,
      bold:undefined,
      italic:undefined,
      underline:undefined,
      strikethrough:undefined,
      align_center:undefined,
      align_left:undefined,
      align_right:undefined,
      justify:undefined,
      insert_ordered_list:undefined,
      insert_unordered_list:undefined,
      backcolor:undefined,
      forecolor:undefined,
      image:undefined,
      link:undefined,
      unlink:undefined,
      formatblock:undefined,
      fontsize:undefined,
      font:undefined
    }
  },
}

export default <i18n_unit> i18n[navigator.language];