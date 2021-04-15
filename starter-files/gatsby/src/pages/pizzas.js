import React from 'react';
import { graphql } from 'gatsby';

export default function PizzasPage() {
  return (
    <>
      <p>This is the Pizzas page.</p>
    </>
  );
}

export const query = graphql`
  query PizzaQuery {
    allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
