import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault/index';
import FormField from '../../../FormField/index';
import Button from '../../../component/button/ButtonStyled/index';

function CadastroCategoria() {
  const [Categorias, setCategorias] = useState(['']);
  const ValoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };
  const [Values, setValues] = useState(ValoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descrição, cor
    setValues({
      ...Values,
      [chave]: valor, // nome: valor
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {Values.nome}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...Categorias, // reticências não permite sobrescrever os valores//
          Values,
        ]);
        setValues(ValoresIniciais);
      }}
      >
        <div>
          <FormField
            label="Nome da categoria"
            type="text"
            name="nome"
            value={Values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="text"
            name="descricao"
            value={Values.descricao}
            onChange={handleChange}
          />
          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={Values.cor}
            onChange={handleChange}
          />
        </div>
        <Button>
          Cadastrar
        </Button>
      </form>
      <ul>
        {Categorias.map((categoria, index) => (
          <li key={`${categoria}${index}`}>
            {categoria.cor}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
