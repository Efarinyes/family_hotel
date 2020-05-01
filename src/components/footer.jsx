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


const Footer = ({title}) => {

    const any = new Date().getFullYear();

    return ( 
        <>
        <footer 
            css= {css`
            
                background-color: rgba(44,62,80);
                padding: 1rem;
                margin-top: 5rem;
               
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
                <Navegacio />
                <LinkInici
                    to = '/'
                >
                    <h1>Family Hotel</h1>
                </LinkInici>
                
            </div>
           
        </footer>
       
        <p 
        css= {css`
            color: white; 
            text-align: center;
            background-color: rgba(33,44,55);
            margin: 0;
            padding: 1rem;
        `}
        >{title}. Tots els drets reservats - {any} &copy; 
        </p>
        </>
     );
}
 
export default Footer;