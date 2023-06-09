import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

function Alerta({variant, text, duration = 0, link }){ //Prueba componetizacion
    const navigate =useNavigate();
    if(duration !== 0 && link){
        setTimeout(()=>{
            navigate(link);
        },duration);
    }
    return <Alert variant={variant}>{text}</Alert>

} 

export default Alerta;