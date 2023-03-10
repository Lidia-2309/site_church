import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { ButtonStyleData } from './style';


export const ButtonData = ({data, onClick}:any) => (
    <ButtonStyleData>
    <Button 
        outline color="info" 
        className="Button" 
        value={data.abbrev.pt} 
        key={data.abbrev.pt}
        onClick={onClick}
        >
            {data.name}

    </Button>
    </ButtonStyleData>
);

export default ButtonData

