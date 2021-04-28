import React from 'react';
import Data from '../dailyWorkout/Data';

// function Test({ id, type, title, program, alt, stats }) {
//   return (
//     <div>
//       {id},{type},{title},{program},{alt},{stats}
//     </div>
//   );
// }

export const HeadingStyled = () => {
  const a = Data.map((e) => (
    <div>
      {e.id}
      {e.type}
      {e.title}
      {e.program}
      {e.alt}
      {e.stats}
    </div>
  ));
  return <div>{a}</div>;
};

export default function Section({ id, type, title, program, alt, stats }) {
  return (
    <div>
      <HeadingStyled />
    </div>
  );
}
