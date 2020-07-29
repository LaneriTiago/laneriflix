import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/Pages/Home/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideos from './components/Pages/Cadastro/index';
import CadastroCategoria from './components/Pages/Cadastro/Categoria/index';

function Pag404 () {
    return (
        <div>
            error 404
        </div>
    )
} 

ReactDOM.render(
  <BrowserRouter>
    <Switch>

        <Route path="/" component={App} exact/>
        <Route path="/cadastro/video" component={CadastroVideos} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={Pag404} />
        
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


