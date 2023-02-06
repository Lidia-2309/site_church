import NavbarInitial from "../../components/NavBarInitial"
import { Container, FullscreenImage } from "../Welcome/style"
import { CenterContent, StyledButton } from "./style"
import { useEffect, useState } from "react"
import apibiblia from "../../services/api"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ButtonData from "../../components/Button/index"

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

interface versions {
    version:string,
    verses:number
}

export const Biblia = () => {

    const [dataBooks, setDataBooks] = useState<Books[]>([]);
    const [book, setBook] = useState<Book>();
    const [version, setVersion] = useState();
    const [versions, setVersions] = useState<versions[]>([]);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);
    const [variables, setVaribles] = useState();

    const toggle = () => setModal(!modal);

    // GET de todos os livros    
    useEffect(()=>{
        apibiblia
        .get<Books[]>("/books")
        .then((response) => 
            setDataBooks(response.data))
        .catch((err)=>{
            console.log("ops! ocorreu um erro" + err)
        })
    },[]);

    // Função que recebe dados do livro selecionado  
    const handleSelectBook = async (value:any) => {
        try{
            setLoading(true);
            const response = await apibiblia
            .get<Book>(`/books/${value.target.value}`)
                setBook(response.data);
                setModal(!modal);    
                console.log(book)
        }
        finally{
            setLoading(false);
        }
    }
    
    useEffect (() => {
        apibiblia
        .get<versions[]>("/versions")
        .then((response) => setVersions(response.data))
        .catch((err) => (console.log("Erro: ", err)))
    },[])

    const handleDSelectVersion = async (value:any) => {
      console.log()
    }
    return (
        <>
             <NavbarInitial></NavbarInitial> 
                <CenterContent>
                    <div className="Vtestament"><h2>Antigo Testamento</h2></div>
                        {/* <select className="VTSelect" onChange={(e) => handleSelectBook(e)}>
                            <option value="">LIVROS</option>  */}
                        <div className="divButton">
                            {dataBooks && dataBooks.filter((p:any)=> p.testament == "VT").map(data => (
                               <ButtonData data={data} onClick={handleSelectBook}/> 
                                ))
                            } 
                        </div>

                        <Modal isOpen={modal} toggle={toggle}>
                            <ModalHeader toggle={toggle}>Escolha a versão:</ModalHeader>
                                <ModalBody>
                                    <br />
                                    {versions.map(data => (
                                        data.version == "ra" ?
                                        <StyledButton color="success"className="button-version">ARA</StyledButton> 
                                        : <StyledButton color="success" className="button-version">{data.version.toUpperCase()}</StyledButton> 
                                        ))
                                    } 
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="secondary" onClick={toggle}>
                                        Cancelar
                                    </Button>
                                </ModalFooter>
                        </Modal>
                    </CenterContent> 

        </>
    )
}

export default Biblia