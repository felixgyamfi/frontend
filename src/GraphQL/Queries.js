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
          duration
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

export const GET_ALLPROGRAM = gql`
  query {
    allProgram {
      _id
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

export const GET_PROGRAM = gql`
  query($id: ID!) {
    Program(id: $id) {
      _id
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
