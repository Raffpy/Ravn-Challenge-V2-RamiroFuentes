import { gql } from '@apollo/client';

export const GET_ALL_PEOPLE = gql `
    query GetAllPeople($after: String){ 
        allPeople (first: 5, after:$after){
            people {
                id
                name
              	eyeColor
              	hairColor
              	skinColor
              	birthYear
                species {
                    id
                    name
                    classification
                }
                homeworld {
                    id
                    name
                }
              	vehicleConnection {
                  vehicles {
                    id
                    name
                  }
                }
            }
            pageInfo{
                endCursor
                hasNextPage
            }
        }
    }
`;