import NavbarInitial from "../../components/NavBarInitial"
import { Container, FullscreenImage } from "../Welcome/style"
import { CenterContent, StyledButton } from "./style"
import { useEffect, useState } from "react"
import apibiblia from "../../services/api"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ButtonData from "../../components/Button/index";
import { useNavigate } from "react-router-dom";

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

export const BibliaAT = () => {

    const [dataBooks, setDataBooks] = useState<Books[]>([]);
    const [book, setBook] = useState<Book>({abbrev: {pt: "", en: ""}, author: "", chapters: 0, comment: "", group: "", name: "",testament: ""});
    const [version, setVersion] = useState<string | null>(null);
    const [versions, setVersions] = useState<versions[]>([]);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);
    const [chapter, setChapter] = useState<number | null>(null);
    const [chapters, setChapters] = useState([]);
    const navigateVerses = useNavigate();
    const versionnn: string = ("");
    const toggle = () => setModal(!modal);

    const toggleNestedClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        let versionn = '';
        try {
            setLoading(true);
            console.log("carregando...");
            versionn = e.currentTarget.value;
            setNestedModal(!nestedModal);
            setCloseAll(false);
        } finally {
            setLoading(false);
            console.log("VERSION:" + versionn);
            await setVersion(versionn)

        }
        };


    const toggleNested = () => {
        console.log("VERSION TOOGLE:", version)
        setNestedModal(!nestedModal);
        setCloseAll(false);
    };

      const toggleAll = () => {
        setNestedModal(!nestedModal);
        setCloseAll(true);
      };

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
        let bookk: Book = {
            abbrev: {
                pt: "",
                en: ""
            },
            author: "",
            chapters: 0,
            comment: "",
            group: "",
            name: "",
            testament: ""
        };
        try{
            setLoading(true);
            const response = await apibiblia
            .get<Book>(`/books/${value.target.value}`)
                bookk = response.data;
                setModal(!modal);    
        }
        finally{
            setLoading(false);
            setBook(bookk);
            console.log(book);
        }
    }
    
    useEffect (() => {
        apibiblia
        .get<versions[]>("/versions")
        .then((response) => setVersions(response.data))
        .catch((err) => (console.log("Erro: ", err)))
    },[])

    const handleSelectChapter = (value:any) => {
        let chapterr = 0;
        try {
            setLoading(true);
            console.log("carregando...");
            chapterr = value.currentTarget.value;
            setNestedModal(!nestedModal);
            setCloseAll(false);
        } finally {
            setLoading(false);
            setChapter(chapterr)
            
            /* navigateVerses("/bibliaAT/versiculos", { 
                state: { 
                    version: version,
                    book:book.abbrev.pt,
                    chapter: chapter
                }
            }) */
        }
        };
        useEffect(() => {
            if(chapter!=null && version !=null && book.name != ""){
                navigateVerses("/bibliaAT/versiculos", { 
                    state: { 
                        version: version,
                        book:book.abbrev.pt,
                        bookName:book.name,
                        chapter: chapter
                    }
                })
            }
          }, [chapter])


    useEffect(()=>{
        let arrayChapters:any = [];
        for(let i=1; i<=book.chapters; i++){
                arrayChapters.push(<Button onClick = {handleSelectChapter} color="success" value={i} key={i}>{i}</Button>)
        }

        setChapters(arrayChapters)
    },[book.chapters])

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
                                        <StyledButton value="ra" onClick={toggleNestedClick} color="success"className="button-version">ARA</StyledButton> 
                                        : <StyledButton value={data.version} onClick={toggleNestedClick} color="success" className="button-version">{data.version.toUpperCase()}</StyledButton> 
                                        ))
                                    } 
                                    <Modal
                                        isOpen={nestedModal}
                                        toggle={toggleNested}
                                        onClosed={closeAll ? toggle : undefined}
                                    >
                                        <ModalHeader>Escolha o capítulo:</ModalHeader>
                                        <ModalBody>
                                            {chapters}
                                        </ModalBody>
                                        <ModalFooter>
                                        <Button color="secondary" onClick={toggleAll}>
                                            Cancelar
                                        </Button>
                                        </ModalFooter>
                                    </Modal>
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

export default BibliaAT