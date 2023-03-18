import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import apibiblia from "../../services/bible/api";
import { Loading, StyleVerses } from "./styles";
import {BallTriangle } from 'react-loading-icons';
import { verses, text } from "../../services/bible/interfaces";
import { Form, FormGroup, Input, Label } from "reactstrap";

export const Verses = () => {
    const location =  useLocation() as any;
    const book = location && location.state.book;
    const bookName = location && location.state.bookName;
    const version = location && location.state.version;
    const chapter = location && location.state.chapter;
    const [verse, setVerse] = useState<text[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [versionName, setVersionName] = useState("");
    const [theme, setTheme] = useState(false);

    //Endpoint: GET https://www.abibliadigital.com.br/api/verses/:version/:abbrev/:chapter

    useEffect(()=>{
        apibiblia
        .get<verses>(`/verses/${version}/${book}/${chapter}`)
        .then((response) => {setVerse(response.data.verses)
         setIsLoading(false)})
        .catch((err) => (console.log(err)))
        
    },[])

    useEffect(()=>{
      if(version=="ra"){
          setVersionName("ARA")
      }else{
          setVersionName(version)
      }
  },[])

    return (!isLoading ? (
      <>
            <StyleVerses theme={theme}>
                <div className="title-toogle">
                  <div className="title">
                  <h3>{bookName} {chapter} - {versionName.toUpperCase()}</h3> 
                  </div>
                  <div className="toogle">
                  <Form>
                    <FormGroup switch>
                      <Input
                        type="switch"
                        checked={theme}
                        onClick={() => {
                          setTheme(!theme);
                          console.log(theme);
                        }}
                      />
                    </FormGroup>
                  </Form>
                  </div>
                </div>
                <div className="versiculos">
                {verse && verse.map(data => (
                <div><span className="number">{data.number}</span><span className="text">{data.text}</span></div>
            ))}</div>
            </StyleVerses> 
        </>
    ) : (
      <Loading><BallTriangle stroke="#4a6b7c"/></Loading>
    ))

}

export default Verses