import { gql } from '@apollo/client';

export const GET_PERSON_DETALS = gql `
    query GetAllPeople($id: String){ 
        person(id: $id){
            name
            eyeColor
            hairColor
            skinColor
            birthYear
            vehicleConnection {
              vehicles {
                id
                name
              }
            }
        }
    }
`;