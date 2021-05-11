import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import NavBar from '../../molecules/NavBar/index';
import DailyWorkoutNEW from '../../organisms/DailyWorkout/DailyWorkoutNEW';
import { WelcomeHead } from '../../atoms/header/WelcomeHead/WelcomeHead';

import { GET_WORKOUTS } from '../../../GraphQL/Queries';

const WrapperDash = styled.div`
  padding: 0 1.7rem;
`;

function Dashboard() {
  const { error, loading, data } = useQuery(GET_WORKOUTS);
  const serverData = data;

  if (loading) {
    return (
      <>
        <WrapperDash className="Dashboard">
          <WelcomeHead />
          <h3>loading...</h3>
        </WrapperDash>
        <NavBar />
      </>
    );
  }

  if (error) {
    return (
      <>
        <WrapperDash className="Dashboard">
          <WelcomeHead />
          <h3>Error...</h3>
        </WrapperDash>
        <NavBar />
      </>
    );
  }

  return (
    <>
      <WrapperDash className="Dashboard">
        <WelcomeHead />
        <DailyWorkoutNEW
          type="Trainingsplan"
          alt={
            serverData?.allProgram[0].workouts[0].Workout.image.asset
              .originalFilename
          }
          img={serverData?.allProgram[0].workouts[0].Workout.image.asset.url}
          title={serverData?.allProgram[0].workouts[0].Workout.title}
          program={serverData?.allProgram[0].title}
          calories={serverData?.allProgram[0].workouts[0].Workout.calories}
          duration={serverData?.allProgram.duration}
          flexibility={serverData?.allProgram.flexibility}
        />
      </WrapperDash>
      <NavBar />
    </>
  );
}

export default Dashboard;
