import { Tecno } from "./style"
import axios from "axios"



function Tecnologies({tech,nivel,idTech,listTechs,setListTechs}){
    const token = localStorage.getItem('token')


    async function del(id){
        await axios.delete(`https://kenziehub.herokuapp.com/users/techs/${id}`,  {

            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(() => {
            const oldTechs = listTechs.filter((tech) => tech.id !== id)
            setListTechs(oldTechs)
        } )
        .catch((e) => {
            console.log(e.response)
        })
    }

    return(
  
            <Tecno>
                <h2>{tech}</h2>
                <div>
                    <span>{nivel}</span>
                    <button onClick={() => del(idTech)}>delete</button>
                </div>
            </Tecno>
   
    )
}

export default Tecnologies