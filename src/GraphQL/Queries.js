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

export const GET_PROGRAM = gql`
  query {
    allProgram {
      title
      focus
      difficulty
      duration
      description
      workouts {
        Workout {
          title
          calories
          categories
          duration
        }
      }
    }
  }
`;
