import { gql } from '@apollo/client';

export const GET_ALL_PEOPLE = gql `
    query GetAllPeople { 
        allPeople {
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
        }
    }
`;