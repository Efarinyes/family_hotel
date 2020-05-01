import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImatgeFons = styled(BackgroundImage)`
   height: 700px;
`;
const TextImatge = styled.div`
    background-image: linear-gradient( to top, rgba(34, 49, 63, .8), rgba(34, 49, 63, .8));
    color: #FFF;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 4rem;
        margin: 0%;
        @media (min-width: 992px) {
            font-size: 5.8rem;
        }
    }
    p {
        font-size: 2rem;
        @media (min-width: 992px) {
            font-size: 3.2rem;
        }
    }
`;

const ImatgeHotel = () => {
    const { image } = useStaticQuery(graphql`
    query {
        image: file(relativePath: { eq: "8.jpg"}) {
          sharp:childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `);
   // console.log(image);

    return ( 
        <ImatgeFons tag='section' fluid = {image.sharp.fluid} fadeIn='soft'>
            <TextImatge>
                <h1> Benvingut a <i>Family Hotel</i></h1>
                <p> El millor resort per a tota la família</p>
            </TextImatge>
        </ImatgeFons>
     );
}
 
export default ImatgeHotel;
