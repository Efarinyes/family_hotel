import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Boto = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44, 62, 80, .85);
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`;

const HabitacioPreviw = ({habitacio}) => {

    const { titol, contingut, imatge, slug  } = habitacio;

    return ( 
        <div
            css= {css`
            
                border: 1px solid #e1e1e1;
                margin-bottom: 2rem;
            `}
        
        >
            <Image fluid = {imatge.fluid } />
            <div
                css= {css`
                    padding: 3rem;
                `}
            >
                <h3
                    css= {css`
                        font-size: 3rem;
                    `}
                > {titol}</h3>
                <p> {contingut} </p>
                <Boto to= {slug}>Detall de l'habitació</Boto>
            </div>
        </div>
     );
}
 
export default HabitacioPreviw;
