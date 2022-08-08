import { Button } from "../Button/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

import{BackGroundModal, Modal, FormTechs} from './style'
import { Api } from "../../assets";
import { ErrorMessage } from "../../pages/Cadastro/style";


function CadastroTech({setIsVisibleModal,listTech,setListTech}){


    const token = localStorage.getItem('token')
    
    const formSchema = yup.object().shape({
        title: yup.string().required('Campo obrigatório'),
        status: yup.string().required('Campo obrigatório')
    })
    
    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver( formSchema )
    })
    
    const onSubmiting = async (data) => {
        try {
            const response = 
                await Api.post('/users/techs', data, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                console.log(response.data) 
                setListTech([...listTech, response.data])
                console.log(listTech)
                setIsVisibleModal(false)         
            }
        
        catch(e){
            console.log(e)
        }

    }

    return(
        <BackGroundModal>
            <Modal>
                <header>
                    <h2>Cadastrar Tecnologia</h2>
                    <button onClick={() => setIsVisibleModal(false) }>close</button>
                </header>
                <FormTechs onSubmit={handleSubmit(onSubmiting)}>
                    <label htmlFor="nome">Nome {errors.title && (<ErrorMessage> - {errors.title.message}</ErrorMessage>)}</label>
                    <input type='text' id="nome" {...register('title')}/>
                    
                    <label htmlFor="status">Selecionar Status {errors.status && (<ErrorMessage> - {errors.status.message}</ErrorMessage>)}</label>
                    <select name="status" id="status"{...register('status')} >
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediario">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>

                    <div>
                        <Button  type="submit" pinkButton={true}>Cadastrar Tecnologia</Button>
                    </div>

                </FormTechs>
            </Modal>
        </BackGroundModal>
    )
}

export default CadastroTech