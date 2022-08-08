import {Switch, Route} from 'react-router-dom'
import Cadastro from '../pages/Cadastro'
import Home from '../pages/Home'
import Login from '../pages/Login'


export function Routes(){

    return(
        <Switch>
            <Route exact path='/home'>
                <Home/>
            </Route>
            <Route exact path='/cadastro'>
                <Cadastro/>
            </Route>
            <Route exact path='/'>
                <Login/>
            </Route>          

        </Switch>
    )
}

