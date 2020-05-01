exports.createPages = async({ actions, graphql, reporter }) => {
    const resultat = await graphql(`
    query {
        allDatoCmsHabitacio {
          nodes {
            slug
          }
        }
      }
    `);
    // console.log(resultat.data.allDatoCmsHabitacio.nodes);

    if (resultat.errors) {
        reporter.panic('No hi ha resultats', resultat.errors);
    }
    // Obtenim resultats, creem les pàgines

    const habitacions = resultat.data.allDatoCmsHabitacio.nodes;
    habitacions.forEach(habitacio => {
        actions.createPage({
            path: habitacio.slug,
            component: require.resolve('./src/components/habitacions.jsx'),
            context: {
                slug: habitacio.slug
            }
        });
    });
};