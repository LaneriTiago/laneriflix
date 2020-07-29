import React from 'react';
import Menu from '../index';
import Footer from '../Footer';
import styled from 'styled-components';


const Main = styled.main`
        background-color: black; 
        color: white;
        flex: 1;
        padding-top: 50px;
        padding-left: 5px;
        padding-right: 5px;
        `;

function PageDefault ({children}) {
    return (
        <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    )
}

export default PageDefault;