import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import Layout from '../components/layout';

export const query = graphql`
    query($slug: String!) {
            allDatoCmsHabitacio(filter: {slug: { eq: $slug}}) {
                nodes {
                    titol
                    contingut
                    imatge {
                    fluid(maxWidth: 1200) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`;

const HabitacioTemplate = ({data: {allDatoCmsHabitacio: {nodes}}}) => {

    const { titol, contingut, imatge } = nodes[0];

    return (
        <Layout>
            <main
                css= {css`
                
                    margin: 0 auto;
                    max-width: 1200px;
                    width: 95%;
                `}
            >
                <h1
                    css= { css`
                        text-align: center;
                        margin-top: 4rem;
                    ` }
                > {titol} </h1>
                <p> {contingut} </p>
                <Image fluid = { imatge.fluid } />
            </main>
        </Layout>
    
    
        );
}
 
export default HabitacioTemplate;