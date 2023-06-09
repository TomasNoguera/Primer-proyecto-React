import Productos from "../Components/productos";
import firebase from '../Config/firebase';

function Home({isLogin}){
    return(
        <div>
            <Productos isLogin={isLogin} />
        </div>
    );
}

export default Home;