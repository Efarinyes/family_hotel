import { graphql, useStaticQuery } from 'gatsby';

const useHabitacions = () => {

    const data = useStaticQuery(graphql`
        query {
            allDatoCmsHabitacio {
                nodes {
                    titol
                    id
                    slug
                    contingut
                    imatge {
                        fluid(maxWidth: 1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `);
  //  console.log(data);
    return data.allDatoCmsHabitacio.nodes.map(habitacio => ({
        titol: habitacio.titol,
        id: habitacio.id,
        imatge: habitacio.imatge,
        contingut: habitacio.contingut,
        slug: habitacio.slug
    }));
    
};
 
export default useHabitacions;
