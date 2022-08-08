import ButtonBase from "../../components/Button"
import { Header } from "../../components/Header/style"
import { Input } from "../../components/Input/style"
import { ErrorMessage, Form } from "../Cadastro/style"
import {ConteinerLogin, MainBlock } from './style'
import { toast } from 'react-toastify'

import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from 'react-router-dom'
import { Api } from "../../assets"



function Login(){

    const history = useHistory()

    const handleNavigation = (path) => {
        history.push(path)
    }

    const formSchema = yup.object().shape({
        email: yup.string().required('Campo Obrigatório').email('E-mail inválido'),
        password: yup.string().required('Campo Obrigatório')
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmiting = async (data) => {
        console.log(data)
        try{
            const response = await Api.post('/sessions', data)
            console.log(response.data)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userName', response.data.user.name)
            localStorage.setItem('userModule', response.data.user.course_module)
            localStorage.setItem('userId', response.data.user.id)
            toast.success('Bem vindo ao Kenzie Hub!')
            handleNavigation('/home')
        }
        catch{
            toast.error('E-mail/Senha inválidos')
        }
        }
    

    return(
        <MainBlock>
            <Header>
                <h1>Kenzie Hub</h1>
            </Header>
            <ConteinerLogin>
                <h2>Login</h2>
                <Form onSubmit={handleSubmit(onSubmiting)}>
                    <label htmlFor="email">Email {errors.email && (<ErrorMessage> - {errors.email.message}</ErrorMessage>)}</label>
                    <Input id="email" placeholder="Digite aqui o email cadastrado" {...register('email')} />

                    <label htmlFor="password">Senha {errors.password && (<ErrorMessage> - {errors.password.message}</ErrorMessage>)} </label>
                    <Input type='password' id="password" placeholder="Digite sua senha" {...register('password')} />

                    <ButtonBase type='submit' >Entrar</ButtonBase>
                    <div>
                        <span>Ainda não possui uma conta ?</span>
                        <ButtonBase pinkButton={false} onClick={() => handleNavigation('/cadastro')} >CADASTRAR</ButtonBase>
                    </div>
                </Form>
            </ConteinerLogin>           
        
        </MainBlock>
    )
}

export default Login