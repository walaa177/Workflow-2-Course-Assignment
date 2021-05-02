import ApolloClient, { gql } from "apollo-boost";
import { orderBy } from "lodash";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
});
client
  .query({
    query: gql`
      {
        ships {
          year_built
          active
          image
          name
        }
      }
    `,
  })
  .then((res) => {
    let ships = res.data.ships;

    const orderedships = orderBy(ships, ["year_built"], ["asc"]);
    //console.log(orderedships);

    orderedships.forEach((ship) => {
      const results = document.querySelector(".results");
      //console.log(ship);

      results.innerHTML += `
        <div class="col-md-6 col-s-6 col-lg-3 card-ship mt-2">
        
           <div class="card  ship" style="width: 18rem;">
           <h3 class="card-title text-center p-2">${ship.name}</h3>
                <img src="${ship.image}" class="card-img-top" alt="imagefor${ship.name}">
                <div class="card-body">
                    
                    <p class="card-text"> <span>Active: </span>${ship.active}</p>
                    <p class="card-text"><span>Year built: </span>${ship.year_built}</p>
                </div>
            </div>
        </div>  
      `;
    });
  });
