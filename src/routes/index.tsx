import { BrowserRouter, Route, Routes, Link, useParams, useLocation } from 'react-router-dom';
import BibliaAT from '../pages/BibliaAT';
import  Home  from '../pages/Home';
import Verses from '../pages/Verses';
import Welcome from '../pages/Welcome';


export const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Welcome />} />  
                <Route path='/home' element={<Home />} />  
                <Route path='/bibliaAT' element={<BibliaAT />} /> 
                <Route path='/bibliaAT/versiculos' element={<Verses/>} />  
                     
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas