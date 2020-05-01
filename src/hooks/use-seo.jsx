import { graphql, useStaticQuery } from 'gatsby';

const useSeo = () => {

    const seo = useStaticQuery(graphql`
    
    query {
        datoCmsSite {
          globalSeo {
            siteName
            titleSuffix
            fallbackSeo {
              title
              description
            }
          }
        }
      }
    
    `);
   return seo.datoCmsSite.globalSeo;

    
};
 
export default useSeo;