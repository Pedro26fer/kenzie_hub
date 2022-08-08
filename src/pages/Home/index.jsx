import { useHistory } from "react-router-dom"
import { useState, useEffect} from "react"
import axios from "axios"
import { Dashboard, HeaderHome, List, ListTech, Welcome } from "./style"
import Tecnologies from "../../components/Tecnologies"
import CadastroTech from "../../components/CadastroTech"

function Home(){
    
    const [listTech, setListTech] = useState([])
    const name = localStorage.getItem('userName')
    const moduleActual = localStorage.getItem('userModule')
    const id = localStorage.getItem('userId')

    const [isVisibleModal, setIsVisibleModal] = useState(false)

    useEffect(() => {
        axios.get(`https://kenziehub.herokuapp.com/users/${id}`)
        .then((response) => {
            setListTech(response.data.techs)   
        })
        .catch((e) => console.log(e))
    }, [])


    

    const history = useHistory()

    const handleNavigation = (path) => {
        localStorage.clear()
        history.push(path)
    }




    


    return(
        <>
            <HeaderHome>
                <div>
                    <h1>Kenzie Hub</h1>
                    <button onClick={()=> handleNavigation('/')}>Sair</button>
                </div>
            </HeaderHome>
            <Welcome>
                <div>
                    <h1>Olá, {name}</h1>
                    <span>{moduleActual}</span>
                </div>
            </Welcome>
            <ListTech>
                <h2>Tecnologias</h2>
                <button onClick={() => setIsVisibleModal(true)}>add</button>
            </ListTech>
            {isVisibleModal && <CadastroTech setIsVisibleModal={setIsVisibleModal} listTech={listTech} setListTech={setListTech} /> }
            <Dashboard>
                {listTech.length > 0? (
                    <List>
                    {
                        listTech.map((tech,index) => {

                           return (<li key={index}><Tecnologies tech={tech.title} nivel={tech.status} idTech={tech.id} listTechs={listTech} setListTechs={setListTech}/></li>)
                            
                        })
                    } 
                    </List>)
                 :
                 (
                        <h1>Adicione sua Tecnologias</h1>
                 )}
            </Dashboard>
   
        </>
        
    )
}

export default Home