import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Button = styled(Link)`
    color: white;
    background-color: #E50914;
    box-sizing: border-box;
    cursor: pointer;
    padding: 8px 12px;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    }
    &:hover,
    &:focus {
    opacity: .5
  }
`;

export default Button