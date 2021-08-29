import { gql } from '@apollo/client';

export const GET_ALL_PEOPLE = gql `
    query GetAllPeople($after: String){ 
        allPeople (first: 5, after:$after){
            people {
                id
                name
                species {
                    id
                    name
                    classification
                }
                homeworld {
                    id
                    name
                }
            }
            pageInfo{
                endCursor
                hasNextPage
            }
        }
    }
`;