import NavbarInitial from "../../components/NavBarInitial"
import { Container, FullscreenImage } from "../Welcome/style"
import { CenterContent } from "./style"
import api from "../../services/api"
import { useEffect, useState } from "react"

interface Book {
    abbrev: {pt: string, en: string},
    author: string,
    chapters: number,
    group: string,
    name: string,
    testament: string
}

export const Biblia = () => {

    const searchbooks = {
        livros: [""]
      };

    const [data, setData] = useState<Book[]>([]);
    const [show, setShow] = useState(false);


    useEffect(()=>{
        api
        .get<Book[]>("/books")
        .then((response) => 
            setData(response.data))
        .catch((err)=>{
            console.log("ops! ocorreu um erro" + err)
        })
    },[]);

    const handleClick = () => {
        setShow(!show)
    }
    
    const names = data.map((item: { name: string }) => item.name);

    return (
        <>
             <NavbarInitial></NavbarInitial> 
                <CenterContent>
                    {/* <h4>Usuario: {user}</h4>
                    <h4>Biorafia: {user}</h4> */}
                    <button onClick={handleClick}> Clique aqui </button>
                    {show && 
                        <div> {names.map(name => (
                            <div key={name}>{name}</div>
                          ))} </div>
                    }     
                </CenterContent> 

        </>
    )
}

export default Biblia