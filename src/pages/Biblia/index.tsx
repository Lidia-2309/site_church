import NavbarInitial from "../../components/NavBarInitial"
import { Container, FullscreenImage } from "../Welcome/style"
import { CenterContent } from "./style"
import { useEffect, useState } from "react"
import apibiblia from "../../services/api"
import { Button } from 'reactstrap';

interface Books {
    abbrev: {pt: string, en: string},
    author: string,
    chapters: number,
    group: string,
    name: string,
    testament: string
}
interface Book{
    abbrev: {pt: string, en: string},
    author:string,
    chapters:number,
    comment:string,
    group:string,
    name:string,
    testament:string
}

export const Biblia = () => {

    const [data, setData] = useState<Books[]>([]);
    const [book, setBook] = useState<Book>();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        apibiblia
        .get<Books[]>("/books")
        .then((response) => 
            setData(response.data))
        .catch((err)=>{
            console.log("ops! ocorreu um erro" + err)
        })
    },[]);



    const handleSelectBook = async (value:any) => {
        try{
            setLoading(true);
            const response = await apibiblia
            .get<Book>(`/books/${value.target.value}`)
                setBook(response.data);
                setShow(true);    
                console.log(book)
        }
        finally{
            setLoading(false);
        }
    }
   
    return (
        <>
             <NavbarInitial></NavbarInitial> 
                <CenterContent>
                    <div className="Vtestament"><h2>Antigo Testamento</h2></div>
                        {/* <select className="VTSelect" onChange={(e) => handleSelectBook(e)}>
                            <option value="">LIVROS</option>  */}
                        <div className="divButton">
                            {data && data.filter((p:any)=> p.testament == "VT").map(data => (
                                <Button outline color="info" className="Button" value={data.abbrev.pt} key={data.abbrev.pt}>
                                    {data.name}
                                </Button>))
                            } 
                        </div>
                    {/*     </select>  */}
                        { book &&
                           <>
                            <h4>Autor: {book.author}</h4>
                           <p>Capitulos: {book.chapters}</p>
                           {/* <p>{book.comment}</p> */}
                        </>
                        }
                        <div className="Ntestament"><h2>Novo Testamento</h2></div>
                        {/* <select className="NTSelect" onChange={(e) => handleSelectBook(e)}>
                            <option value="">LIVROS</option> 
                            {data && data.filter((p:any)=> p.testament == "NT").map(data => (
                                <option value={data.abbrev.pt} key={data.abbrev.pt}>
                                    {data.name}
                                </option>))
                            } 
                        </select>  */}
                        { book &&
                           <>
                           
                           <h4>Autor: {book.author}</h4>
                           <p>Capitulos: {book.chapters}</p>
                          {/*  <p>{book.comment}</p> */}
                        </>
                        }
                </CenterContent> 

        </>
    )
}

export default Biblia