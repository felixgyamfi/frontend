import { gql } from '@apollo/client';

export const GET_WORKOUTS = gql`
  query {
    allProgram {
      title
      workouts {
        week
        Workout {
          title
          calories
          image {
            asset {
              originalFilename
              url
            }
          }
        }
      }
    }
  }
`;
