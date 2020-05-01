import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const TextNosaltres= styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px ) {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }
  p {
    line-height: 2;
    margin-top: 2rem;
  }

`;

const ContingutNosaltres = () => {
    const informacio = useStaticQuery(graphql`
    query {
        allDatoCmsPagina(filter: {slug: { eq: "nosaltres"} }) {
          nodes {
            titol
            contingut
            imatge {
              fluid (maxWidth: 1200 ){
                ...GatsbyDatoCmsFluid
              }
            }
            
          }
        }
      }
    `);

   // console.log(informacio.allDatoCmsPagina.nodes[0]);
   const { titol, contingut, imatge } = informacio.allDatoCmsPagina.nodes[0];

    return ( 
        <>
            <h2
                css={css`
                    text-align: center;
                    font-size: 4rem;
                    margin-top: 4rem;
                `}
            
            
            > { titol} </h2>
            <TextNosaltres>
                <p> {contingut} </p>
                <Image fluid= {imatge.fluid} alt= { titol }/>
            </TextNosaltres>
            
        </>
     );
}
 
export default ContingutNosaltres;
