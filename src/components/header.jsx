import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Navegacio from './nav';

const LinkInici = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`;


const Header = () => {
    return ( 
        <header 
            css= {css`
                background-color: rgba(44,62,80);
                padding: 1rem;
            `}
        >
            <div 
                css= {css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <LinkInici
                    to = '/'
                >
                    <h1>Family Hotel</h1>
                </LinkInici>
                
                <Navegacio />
                
            </div>
        </header>
     );
}
 
export default Header;