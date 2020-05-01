import React from "react";
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import ImatgeHotel from '../components/imatgeHotel';
import HabitacioPreviw from '../components/havitacioPreviw';
import ContingutInici from '../components/contingutinici';
import useHabitacions from '../hooks/use-habitacions';

const LlistaHabitacions = styled.ul`

   max-width: 1200px;
   width: 95%;
   margin: 4rem auto 0 auto;
   @media (min-width: 768px ) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 3rem;
   }
`;

const IndexPage = () => {

  const habitacions =  useHabitacions();
 // console.log(habitacions);

   return (
      <Layout>
          <ImatgeHotel />
          <ContingutInici />

          <h2 
            css = {css`
               text-align: center;
               margin-top: 5rem;
               font-size: 3rem;
            `}
          >Habitacions per a tothom</h2>
          <LlistaHabitacions>
             {habitacions.map(habitacio => (
                <HabitacioPreviw 
                  key= {habitacio.id}
                  habitacio = {habitacio}
                
                
                />
             ))}
          </LlistaHabitacions>
       </Layout>
    );
};

export default IndexPage;
