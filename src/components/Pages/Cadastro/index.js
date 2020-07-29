import React from 'react';
import PageDefault from '../../PageDefault';
import { Link } from 'react-router-dom';


function CadastroVideos () {
    return (
        <PageDefault>
            <h1>
                Cadastro de Vídeo
            </h1>
            <Link to="cadastro/categoria">
                Cadastrar categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideos;