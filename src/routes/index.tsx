import { BrowserRouter, Route, Routes, Link, useParams, useLocation } from 'react-router-dom';
import Biblia from '../pages/Biblia';
import  Home  from '../pages/Home';
import Welcome from '../pages/Welcome';


export const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Welcome />} />  
                <Route path='/home' element={<Home />} />  
                <Route path='/biblia' element={<Biblia />} />  
                     
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas