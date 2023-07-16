import { gql } from "@apollo/client";

export const FILM_LIST_QUERY = gql`query Film {
  allFilms {
    films {
      id
      title
      speciesConnection {
        species {
          name
          classification
        }
      }
      releaseDate
      director
    }
  }
}
`;

export const FILE_DETAIL_QUERY = gql`query FileDetail($filmId: ID) {
  film(id: $filmId) {
    producers
    created
    director
    id
    releaseDate
    title
    openingCrawl
  }
}`;
