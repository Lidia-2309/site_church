import NavbarInitial from "../../components/NavBarInitial"
import { Container, FullscreenImage } from "../Welcome/style"
import { CenterContent } from "./style"
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

export const Biblia = () => {

    const [data, setData] = useState<Books[]>([]);
    const [book, setBook] = useState<Book>();
    const [show, setShow] = useState(false);
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
            setData(response.data))
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
 
    return (
        <>
             <NavbarInitial></NavbarInitial> 
                <CenterContent>
                    <div className="Vtestament"><h2>Antigo Testamento</h2></div>
                        {/* <select className="VTSelect" onChange={(e) => handleSelectBook(e)}>
                            <option value="">LIVROS</option>  */}
                        <div className="divButton">
                            {data && data.filter((p:any)=> p.testament == "VT").map(data => (
                               <ButtonData data={data} onClick={handleSelectBook}/> 
                                ))
                            } 
                        </div>

                        <Modal isOpen={modal} toggle={toggle}>
                            <ModalHeader toggle={toggle}>Escolha a versão:</ModalHeader>
                                <ModalBody>
                                    <br />
                                    <Button color="success">
                                        ARA
                                    </Button>
                                    <Button color="success">
                                        NVI
                                    </Button>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="secondary" onClick={toggle}>
                                        Cancel
                                    </Button>
                                </ModalFooter>
                        </Modal>
                    </CenterContent> 

        </>
    )
}

export default Biblia