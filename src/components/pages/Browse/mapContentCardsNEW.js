import React from 'react';
import { useQuery } from '@apollo/client';

import ProgramCard from '../../molecules/ProgramCard/index';

import { GET_PROGRAM } from '../../../GraphQL/Queries';

function Browse() {
  const { error, loading, data } = useQuery(GET_PROGRAM);
  const serverData = data;

  const MapProgram = () => {
    const a = serverData.map(({ title, id }) => (
      <>
        <ProgramCard
          title={serverData?.allProgram[0].title}
          id={serverData?.allProgram[0].id}
        />
      </>
    ));
    return <div>{a}</div>;
  };
  console.log(MapProgram);
}

export default Browse;
