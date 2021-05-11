import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROGRAM } from '../../../GraphQL/Queries';

import ProgramCard from '../../molecules/ProgramCard/index';

const MapBrowse = () => {
  const { error, loading, data } = useQuery(GET_PROGRAM);

  if (loading) {
    return 'loading...';
  }
  if (error) {
    return `Error! ${error.message}`;
  }
  return (
    <div>
      {data?.allProgram?.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  );
};

export default MapBrowse;
