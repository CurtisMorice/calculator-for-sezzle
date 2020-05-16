import React from 'react';

function getCalculations() {
  fetch(`/api/calculations`)
    .then((response) => response.json())
    .then(calculations => console.log(calculations));
}



export function SampleComponent(params: any) {
  return (
    <div>This is the SampleComponent!
      { getCalculations()}
    </div>
  );
}
