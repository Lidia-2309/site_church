export interface Books {
    abbrev: {pt: string, en: string},
    author: string,
    chapters: number,
    group: string,
    name: string,
    testament: string
}
export interface Book{
    abbrev: {pt: string, en: string},
    author:string,
    chapters:number,
    comment:string,
    group:string,
    name:string,
    testament:string
}

export interface versionsInter {
    version:string,
    verses:number
}

export interface verses {
    book: {
      abbrev:{
        pt: string,
        en:string
        },
      name:string,
      author:string,
      group:string,
      version:string
    },
    chapter: {
      number:number,
      verses:number
    },
    verses: [
      {number: number,text:string}
    ]
}

export interface text {
    number: number,
    text:string  
}
