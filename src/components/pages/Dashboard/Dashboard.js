import React from 'react';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';

import NavBar from '../../molecules/NavBar/index';
import DailyWorkoutNEW from '../../organisms/DailyWorkout/DailyWorkoutNEW';
import { WelcomeHead } from '../../atoms/header/WelcomeHead/WelcomeHead';

import dashData from '../../organisms/DailyWorkout/Data';
import { GET_WORKOUTS } from '../../../GraphQL/Queries';

const WrapperDash = styled.div`
  padding: 0 1.7rem;
`;

function Dashboard() {
  const { error, loading, data } = useQuery(GET_WORKOUTS);
  console.log(data);

  if (loading) {
    <>
      <WrapperDash className="Dashboard">
        <WelcomeHead />
        <div>loading...</div>
      </WrapperDash>
      <NavBar />
    </>;
  }

  const serverData = data.allProgram;

  return (
    <>
      <WrapperDash className="Dashboard">
        <WelcomeHead />
        <DailyWorkoutNEW
          type="Trainingsplan"
          alt={serverData.alt}
          title={serverData.title}
          program={serverData[0].title}
          calories={serverData[0].workouts[0].Workout.calories}
          duration={serverData.duration}
          flexibility={serverData.flexibility}
        />
      </WrapperDash>
      <NavBar />
    </>
  );
}

export default Dashboard;
