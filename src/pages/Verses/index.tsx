import NavbarHome from "../../components/NavBarHome";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import apibiblia from "../../services/api";
import { StyleVerses } from "./styles";

interface Verses {
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

    interface text {
        number: number,
        text:string  
    }



export const Verses = () => {
    const location =  useLocation() as any;
    const book = location && location.state.book;
    const version = location && location.state.version;
    const chapter = location && location.state.chapter;
    const [verse, setVerse] = useState<text[]>([]);

    //Endpoint: GET https://www.abibliadigital.com.br/api/verses/:version/:abbrev/:chapter

    useEffect(()=>{
        apibiblia
        .get<Verses>(`/verses/${version}/${book}/${chapter}`)
        .then((response) => setVerse(response.data.verses))
        .catch((err) => (console.log(err)))
    },[])


    return (
        <>
            <StyleVerses>
                {verse && verse.map(data => (
                <div>{data.number}{data.text}</div>
            ))}
            </StyleVerses> 
        </>
    )
}

export default Verses