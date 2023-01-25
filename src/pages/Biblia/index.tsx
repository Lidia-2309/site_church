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

    const [data, setData] = useState<Book[]>([]);

    useEffect(()=>{
        api
        .get<Book[]>("/books")
        .then((response) => 
            setData(response.data))
        .catch((err)=>{
            console.log("ops! ocorreu um erro" + err)
        })
    },[]);

    return (
        <>
             <NavbarInitial></NavbarInitial> 
                <CenterContent>
                        <select>
                            <option value="">LIVROS</option> 
                            {data.map(data => (
                                <option key={data.name}>
                                    {data.name}
                                </option>))
                            } 
                        </select>   
                </CenterContent> 

        </>
    )
}

export default Biblia