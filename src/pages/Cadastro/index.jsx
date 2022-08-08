import * as yup from "yup"
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from "react-router-dom"
import ButtonBase from "../../components/Button"
import { Header } from "../../components/Header/style"
import { Input } from "../../components/Input/style"
import { Conteiner, ErrorMessage } from "./style"
import { Form } from "./style"
import {Api} from "../../assets"
import { toast } from 'react-toastify'


function Cadastro(){

    const formSchema = yup.object().shape({
        name: yup.string().required('Campo Obrigatório'),
        email: yup.string().required('Campo Obrigatório').email('E-mail inválido'),
        password: yup.string().required('Campo Obrigatório').min(8,'Mínimo 8 caracteres'),
        confirmSenha: yup.string().required('Confirme sua senha').oneOf([yup.ref('password'), null], 'As sehas não são iguais'),
        bio: yup.string().required('Nos conte algo'),
        contact: yup.string().required('Campo Obrigatório').matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Telefone inválido'),
        course_module: yup.string().required('Campo Obrigatório')
    })
    
    const history = useHistory()

    const handleNavigation = (path) => {
        history.push(path)
    }

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver( formSchema)
    })

    const  onSubmiting = async (data) => {
        console.log(data)

        try{
            const response = await Api.post('/users',data)
            console.log(response.data)
            toast.success('Sucesso ao criar a conta')
            return handleNavigation('/')     
        }  
        catch(e){
            toast.error('Erro ao criar a conta. Tente outro email')
            console.log(e.message)
        }      

    }

    console.log(errors)
    




    return(
        <>
            <Header>
                <h1>Kenzie Hub</h1>
                <button onClick={()=>{handleNavigation('/')}} >Voltar</button>
            </Header>
            <Conteiner>
                <div>
                    <h2>Crie sua conta</h2>
                    <span>Rápido e grátis, vamos nessa</span>
                </div>
                <Form onSubmit={handleSubmit(onSubmiting)}>
                    <label htmlFor="name">Nome {errors.name && (<ErrorMessage> - {errors.name.message}</ErrorMessage>)}</label>
                    <Input type='text' id="name" placeholder="Digite aqui seu nome" {...register('name')}/>
                    

                    <label htmlFor="email">Email {errors.email && (<ErrorMessage> - {errors.email.message}</ErrorMessage>)}</label>
                    <Input type="text" id="email" placeholder="Digite seu email" {...register('email')} />

                    <label htmlFor="senha">Senha {errors.password && (<ErrorMessage> - {errors.password.message}</ErrorMessage>)}</label>
                    <Input type="password" id="senha" placeholder="Digte aqui a sua senha" {...register('password')} />

                    <label htmlFor="confimSenha">Confirme sua senha {errors.confirmSenha && (<ErrorMessage> - {errors.confirmSenha.message}</ErrorMessage>)}</label>
                    <Input type='password' id="confimSenha" placeholder="Digite novamente sua senha"  {...register('confirmSenha')} />

                    <label htmlFor="bio">Bio {errors.bio && (<ErrorMessage> - {errors.bio.message}</ErrorMessage>)}</label>
                    <Input type='text' id="bio" placeholder="Fale sobre você" {...register('bio')} />

                    <label htmlFor="contato">Contato {errors.contact && (<ErrorMessage> - {errors.contact.message}</ErrorMessage>)}</label>
                    <Input type="text" id="contato" placeholder="Opção de contato" {...register('contact')}/>

                    <label htmlFor="modulo"> Selecionar módulo {errors.course_module && (<ErrorMessage> - {errors.course_module.message}</ErrorMessage>)}</label>
                    <select name="modulo" id="modulo" {...register('course_module')}>
                        <option value="--">Selecione...</option>
                        <option value="Primeiro Módulo -Introdução ao Front-End">Primeiro Módulo -Introdução ao Front-End-</option>
                        <option value="Segundo Módulo -Frontend Avançado">Segundo Módulo -Frontend Avançado-</option>
                        <option value="Terceiro Módulo -Introdulçao ao Backend">Terceiro Módulo -Introdulçao ao Backend-</option>
                        <option value="Quarto Módulo -Backend Avançado">Quarto Módulo -Backend Avançado-</option>
                    </select>


                    <ButtonBase type="submit" >Cadastrar</ButtonBase> 

                    
                </Form>
            </Conteiner>            
        
            
        </>

    )
}

export default Cadastro