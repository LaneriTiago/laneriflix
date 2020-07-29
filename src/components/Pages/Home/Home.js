import React from 'react';
import Menu from '../../index';
import Footer from '../../Footer';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';


function App () {
  return (
    <nav>
      <Menu />
      
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Gorillaz é uma banda virtual de trip rock criada no ano de 1998 pelo líder do Blur, Damon Albarn e por Jamie Hewlett, cocriador da história em quadrinhos Tank Girl. A banda é composta por quatro membros animados: 2-D, Murdoc, Noodle e Russel"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      

      <Footer />


    </nav>
  );
}

export default App;
